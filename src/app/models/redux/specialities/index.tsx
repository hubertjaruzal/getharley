export interface Speciality {
  speciality_id: number;
  name: string;
}

export interface SpecialitiesActionModel {
  type: string;
  payload?: any;
}

export interface Specialities {
  list: Speciality[];
}

export const GET_SPECIALITIES = "GET_SPECIALITIES";

export interface GetSpecialitiesAction {
  type: typeof GET_SPECIALITIES;
  payload: Speciality[];
}
