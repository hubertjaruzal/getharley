import { combineReducers } from "redux";

import practitioners from "./practitioners";
import specialities from "./specialities";

export default combineReducers({
  practitioners,
  specialities,
});
