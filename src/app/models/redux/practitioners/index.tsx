export interface Practitioner {
  practitioner_id: number;
  first_name: string;
  last_name: string;
  email: string;
  specialities: number[];
}

export interface PractitionersActionModel {
  type: string;
  payload?: any;
}

export interface Practitioners {
  list: Practitioner[];
}

export const GET_PRACTITIONERS = "GET_PRACTITIONERS";

export type GetPractitionersPayload = Practitioner[];

export interface GetPractitionersAction {
  type: typeof GET_PRACTITIONERS;
  payload: GetPractitionersPayload;
}
