import { differenceInHours, format, isPast } from "date-fns";
import { Practitioner } from "../../../models/redux/practitioners";
import { FreeBusyTimeslotModel, FreeBusyResponse, FreeBusyDayModel } from "../../../models/services/freeBusy";

export interface TimeslotModel {
  startTime: Date;
  endTime: Date;
  isAvailable: boolean;
}

export interface SlotsModel {
  date: Date;
  practitioner: Practitioner;
  timeslots: Array<TimeslotModel>
}

export const getDifference = (startTime: Date, selectedDate: Date) => differenceInHours(
  new Date(`${format(selectedDate, "yyyy-MM-dd")}T${format(new Date(startTime), "HH:mm:ss")}`),
  selectedDate,
);

export const formatTimeslots = (timeslots: FreeBusyTimeslotModel[], selectedDate: Date) => {
  return timeslots
    .filter((slot: FreeBusyTimeslotModel) => {
      const difference = getDifference(slot.startTime, selectedDate);
      return slot.isAvailable && difference <= 1 && difference >= -1 && !isPast(new Date(slot.startTime));
    })
    .map((slot: FreeBusyTimeslotModel) => ({
      startTime: slot.startTime,
      endTime: slot.endTime,
      isAvailable: slot.isAvailable,
    }));
};

export const getSlots = (data: FreeBusyResponse, practitioner: Practitioner, selectedDate: Date): SlotsModel[] => {
  return data.days
    .map((day: FreeBusyDayModel) => ({ date: day.date, practitioner, timeslots: formatTimeslots(day.timeslots, selectedDate) }))
    .filter((slot: SlotsModel) => !!slot.timeslots.length);
};
