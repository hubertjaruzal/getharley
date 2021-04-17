import { GET_PRACTITIONERS, GetPractitionersAction, GetPractitionersPayload } from "../../../models/redux/practitioners";

export const getPractitioners = (payload: GetPractitionersPayload): GetPractitionersAction => {
  return {
    type: GET_PRACTITIONERS,
    payload,
  };
};
