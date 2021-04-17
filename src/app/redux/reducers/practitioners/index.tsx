import { Practitioners, PractitionersActionModel } from "../../../models/redux/practitioners";

const initialState = {
  list: [],
};

const practitioners = (state: Practitioners = initialState, action: PractitionersActionModel) => {
  switch (action.type) {
    case "GET_PRACTITIONERS":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default practitioners;
