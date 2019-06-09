import { combineReducers } from "redux";

import auth from "./auth";
import type from "./type";

export default combineReducers({
  auth,
  type
});
