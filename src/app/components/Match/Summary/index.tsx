import React from "react";
import { format } from "date-fns";
import { FormModel } from "../index.utils";
import {
  Container,
  Title,
  Heading,
  Info,
  InfoList,
  InfoListItem,
  Speciality,
  BottomText,
  Bold,
} from "./index.styles";

interface Props {
  values: FormModel;
}

const Summary = ({ values }: Props) => {
  const { selectedSlot, selectedPractitioner, speciality, patient } = values;
  const date = format(selectedSlot?.startTime ?? 0, "dd.MM.yyyy");
  const startTime = format(selectedSlot?.startTime ?? 0, "HH:mm");
  const endTime = format(selectedSlot?.endTime ?? 0, "HH:mm");

  return (
    <Container>
      <Title>Summary</Title>
      <Heading>{patient.firstName}, your appointment has been set successfully.</Heading>
      <Info>Details:</Info>
      <InfoList>
        <InfoListItem>
          <Bold>Practitioner:</Bold> {selectedPractitioner.name}
        </InfoListItem>
        <InfoListItem>
          <Bold>Speciality:</Bold> <Speciality>{speciality.name}</Speciality>
        </InfoListItem>
        <InfoListItem>
          <Bold>Date:</Bold> {date}
        </InfoListItem>
        <InfoListItem>
          <Bold>Time:</Bold> {startTime} - {endTime}
        </InfoListItem>
      </InfoList>
      <BottomText>Thank you!</BottomText>
    </Container>
  );
};

export default Summary;
