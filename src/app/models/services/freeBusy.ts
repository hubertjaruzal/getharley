export interface FreeBusyDayModel {
  date: Date;
  dayOfWeekIndex: number;
  dayOfWeekName: string;
  endTimeInMin: number;
  sharedRange: Array<{
    endTimeInMin: number;
    startTimeInMin: number;
  }>;
  startTimeInMin: number;
  timeslots: Array<FreeBusyTimeslotModel>
  visibility: string;
}

export interface FreeBusyTimeslotModel {
  availability: string;
  capacity: number;
  endTime: Date;
  eventRefs: any[];
  hasVoted: boolean;
  hashtags: any[];
  isAvailable: boolean;
  startTime: Date;
  voteValue: string;
}

export interface FreeBusyResponse {
  days: Array<FreeBusyDayModel>;
  endDate: Date;
  events: Array<any>;
  startDate: Date;
  timeZone: string;
}
