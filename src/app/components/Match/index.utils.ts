export interface FormModel {
  speciality: {
    id: number | undefined;
    name: string;
  },
  dateTime: Date;
  selectedPractitioner: {
    id: number | undefined,
    name: string;
  },
  selectedSlot: {
    startTime: Date | undefined,
    endTime: Date | undefined,
  },
  patient: {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
  },
}

export const DEFAULT_VALUES: FormModel = {
  speciality: {
    id: undefined,
    name: "",
  },
  dateTime: new Date(),
  selectedPractitioner: {
    id: undefined,
    name: "",
  },
  selectedSlot: {
    startTime: undefined,
    endTime: undefined,
  },
  patient: {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  },
};
