import { Practitioner } from "../models/redux/practitioners";

export const practitioners: Practitioner[] = [
  {
    practitioner_id: 1,
    first_name: "Anna",
    last_name: "Doctor",
    email: "anna1238901@gmail.com",
    specialities: [2, 3, 4, 6],
  },
  {
    practitioner_id: 2,
    first_name: "Min",
    last_name: "Doktor",
    email: "minopsopsops@gmail.com",
    specialities: [1, 5, 6],
  },
  {
    practitioner_id: 3,
    first_name: "Asha",
    last_name: "Doc",
    email: "ashadoc1238901@gmail.com",
    specialities: [1, 4, 6],
  },
  {
    practitioner_id: 4,
    first_name: "Yisheng",
    last_name: "Dr",
    email: "yishengdr1238901@gmail.com",
    specialities: [2, 3, 6],
  },
];
