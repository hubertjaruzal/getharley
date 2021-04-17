import MockDate from "mockdate";
import { practitioners } from "../../../../constants/practitioners";
import { formatTimeslots, getSlots } from "../index.utils";

const INITIAL_TIMESLOT_VALUES = {
  availability: "outsideTimeRange",
  capacity: 1,
  eventRefs: [],
  hasVoted: false,
  hashtags: [],
  voteValue: "notSet",
};

const INITIAL_DAY_VALUES = {
  dayOfWeekIndex: 1,
  dayOfWeekName: "",
  endTimeInMin: 0,
  sharedRange: [],
  startTimeInMin: 0,
  visibility: "Public",
};

const selectedDate = new Date(2021, 5, 20, 15); // 20.06.21 15:00

test("formatTimeslots should render mapped timeslots with needed data only", () => {
  const EXPECTED_DATA = [
    {
      startTime: new Date(2021, 5, 19, 15), // 19.06.21 15:00
      endTime: new Date(2021, 5, 19, 15, 30), // 19.06.21 15:30
      isAvailable: true,
    },
    {
      startTime: new Date(2021, 5, 20, 15), // 20.06.21 15:00
      endTime: new Date(2021, 5, 20, 15, 30), // 20.06.21 15:30
      isAvailable: true,
    }
  ];
  const MOCKED_TIMESLOTS = [
    {
      ...INITIAL_TIMESLOT_VALUES,
      ...EXPECTED_DATA[0],
    },
    {
      ...INITIAL_TIMESLOT_VALUES,
      ...EXPECTED_DATA[1],
    }
  ];

  expect(formatTimeslots(MOCKED_TIMESLOTS, selectedDate)).toEqual(EXPECTED_DATA);
});

test("getSlots should return data with available slots from present or future with difference of 1 hour from selected date and time", () => {
  MockDate.set(new Date(2021, 5, 19, 15));
  const MOCKED_FREE_BUSY_RESPONSE = {
    days: [
      {
        ...INITIAL_DAY_VALUES,
        date: new Date(2021, 5, 18), // 18.06.21
        timeslots: [
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 18, 15), // 18.06.21 15:00
            endTime: new Date(2021, 5, 18, 15, 30), // 18.06.21 15:30
            isAvailable: true,
          },
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 18, 18), // 18.06.21 18:00
            endTime: new Date(2021, 5, 18, 18, 30), // 18.06.21 18:30
            isAvailable: true,
          },
        ],
      },
      {
        ...INITIAL_DAY_VALUES,
        date: new Date(2021, 5, 19), // 19.06.21
        timeslots: [
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 19, 15), // 19.06.21 15:00
            endTime: new Date(2021, 5, 19, 15, 30), // 19.06.21 15:30
            isAvailable: false,
          },
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 19, 16), // 19.06.21 16:00
            endTime: new Date(2021, 5, 19, 16, 30), // 19.06.21 16:30
            isAvailable: true,
          },
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 19, 18), // 19.06.21 18:00
            endTime: new Date(2021, 5, 19, 18, 30), // 19.06.21 18:30
            isAvailable: true,
          },
        ],
      },
      {
        ...INITIAL_DAY_VALUES,
        date: new Date(2021, 5, 23), // 23.06.21
        timeslots: [
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 23, 15), // 23.06.21 15:00
            endTime: new Date(2021, 5, 23, 15, 30), // 23.06.21 15:30
            isAvailable: true,
          },
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 23, 16), // 23.06.21 16:00
            endTime: new Date(2021, 5, 23, 16, 30), // 23.06.21 16:30
            isAvailable: true,
          },
          {
            ...INITIAL_TIMESLOT_VALUES,
            startTime: new Date(2021, 5, 23, 18), // 23.06.21 18:00
            endTime: new Date(2021, 5, 23, 18, 30), // 23.06.21 18:30
            isAvailable: false,
          },
        ],
      },
    ],
    endDate: new Date(2021, 5, 18), // 18.06.21
    events: [],
    startDate: new Date(2021, 5, 25), // 25.06.21
    timeZone: "America/New_York",
  };

  const EXPECTED_DATA = [
    {
      date: new Date(2021, 5, 19), // 19.06.21
      practitioner: practitioners[0],
      timeslots: [
        {
          startTime: new Date(2021, 5, 19, 16), // 19.06.21 16:00
          endTime: new Date(2021, 5, 19, 16, 30), // 19.06.21 16:30
          isAvailable: true,
        },
      ],
    },
    {
      date: new Date(2021, 5, 23), // 23.06.21
      practitioner: practitioners[0],
      timeslots: [
        {
          startTime: new Date(2021, 5, 23, 15), // 23.06.21 15:00
          endTime: new Date(2021, 5, 23, 15, 30), // 23.06.21 15:30
          isAvailable: true,
        },
        {
          startTime: new Date(2021, 5, 23, 16), // 23.06.21 16:00
          endTime: new Date(2021, 5, 23, 16, 30), // 23.06.21 16:30
          isAvailable: true,
        },
      ],
    }
  ];

  expect(getSlots(MOCKED_FREE_BUSY_RESPONSE, practitioners[0], new Date(2021, 5, 19, 15))).toEqual(EXPECTED_DATA);
  MockDate.reset();
});
