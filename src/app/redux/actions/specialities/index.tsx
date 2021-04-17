import { specialities } from "../../../constants/specialities";
import { GET_SPECIALITIES, GetSpecialitiesAction } from "../../../models/redux/specialities";

export const getSpecialities = (): GetSpecialitiesAction => {
  return {
    type: GET_SPECIALITIES,
    payload: specialities,
  };
};
