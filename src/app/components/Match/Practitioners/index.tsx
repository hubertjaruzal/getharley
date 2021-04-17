import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UseFormSetValue } from "react-hook-form";
import { format, isEqual } from "date-fns";
import { getPractitioners } from "../../../redux/actions/practitioners";
import { practitioners as practitionersList } from "../../../constants/practitioners";
import { apiCall } from "../../../services/api";
import { State } from "../../../models/redux";
import { Practitioner } from "../../../models/redux/practitioners";
import { FormModel } from "../index.utils";
import { getSlots, SlotsModel, TimeslotModel } from "./index.utils";
import {
  Container,
  Info,
  Slots,
  PractitionerInfo,
  PractitionerLabel,
  PractitionerName,
  DateList,
  DateListItem,
  DateText,
  HoursList,
  HoursListItem,
  HoursListItemButton,
} from "./index.styles";

interface Props {
  values: FormModel;
  setValue: UseFormSetValue<FormModel>;
}

const Practitioners = ({ values, setValue }: Props) => {
  const [slots, setSlots] = useState<SlotsModel[][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const practitioners = useSelector((state: State) => state.practitioners);
  const dispatch = useDispatch();

  const date = format(values.dateTime, "yyyy-MM-dd");
  const { speciality } = values;
  const { selectedSlot } = values;
  const { selectedPractitioner } = values;

  useEffect(() => {
    const filteredPractitioners = practitionersList.filter(practitioner => practitioner.specialities.includes(Number(speciality.id)));
    dispatch(getPractitioners(filteredPractitioners));
  }, [values.dateTime]);

  useEffect(() => {
    if (practitioners.list.length) {
      getDates(practitioners.list);
    }
  }, [practitioners.list]);

  const getDates = async (list: Practitioner[]) => {
    const tz = Intl?.DateTimeFormat?.()?.resolvedOptions?.()?.timeZone ?? "America/New_York";
    const filledData = [] as any[];
    setIsLoading(true);
    await Promise.all(list.map(async (practitioner) => {
      const data = await apiCall(
        "GET",
        `https://api.freebusy.io/beta/week/${practitioner.email}?tz=${tz}&date=${date}`,
      );

      filledData.push(getSlots(data, practitioner, values.dateTime));
    }));
    setIsLoading(false);

    setSlots(filledData.filter(data => !!data.length));
  };

  if (isLoading) {
    return (
      <Container>
        <Info>Loading...</Info>
      </Container>
    );
  }

  return (
    <Container>
      {slots.length ?
        <Info>Select time slot</Info> :
        <>
          <Info>Sorry, we can&apos;t find available slots</Info>
          <Info>Please select different date and time</Info>
        </>
      }
      {slots.map((data, index) => {
        const dataPractitioner = data?.[0]?.practitioner;
        const dataPractitionerFullName = `${dataPractitioner?.first_name ?? ""} ${dataPractitioner?.last_name ?? ""}`;
        return (
          <Slots key={index}>
            <PractitionerInfo>
              <PractitionerLabel>Practitioner:</PractitionerLabel>
              <PractitionerName>{dataPractitionerFullName}</PractitionerName>
            </PractitionerInfo>
            <DateList>
              {data.map((slot: SlotsModel, index: number) => !!slot.timeslots.length && (
                <DateListItem key={index}>
                  <DateText>{format(new Date(slot.date), "dd.MM.yyyy")}</DateText>
                  <HoursList>
                    {slot.timeslots.map((timeslot: TimeslotModel, index: number) => (
                      <HoursListItem key={index}>
                        <HoursListItemButton
                          type="button"
                          isSelected={(
                            dataPractitioner?.practitioner_id === selectedPractitioner.id &&
                            isEqual(selectedSlot?.startTime ?? 0, new Date(timeslot.startTime)) &&
                            isEqual(selectedSlot?.endTime ?? 0, new Date(timeslot.endTime))
                          )}
                          onClick={() => {
                            setValue(
                              "selectedSlot",
                              {
                                startTime: new Date(timeslot.startTime),
                                endTime: new Date(timeslot.endTime),
                              },
                            );
                            setValue(
                              "selectedPractitioner",
                              {
                                id: dataPractitioner?.practitioner_id,
                                name: dataPractitionerFullName,
                              },
                            );
                          }}
                        >
                          {format(new Date(timeslot.startTime), "HH:mm")} - {format(new Date(timeslot.endTime), "HH:mm")}
                        </HoursListItemButton>
                      </HoursListItem>
                    ))}
                  </HoursList>
                </DateListItem>
              ))}
            </DateList>
          </Slots>
        );
      })}
    </Container>
  );
};

export default Practitioners;
