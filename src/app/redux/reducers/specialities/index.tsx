import { Specialities, SpecialitiesActionModel, GET_SPECIALITIES } from "../../../models/redux/specialities";

const initialState = {
  list: [],
};

const specialities = (state: Specialities = initialState, action: SpecialitiesActionModel) => {
  switch (action.type) {
    case GET_SPECIALITIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default specialities;
