import { combineReducers } from "redux";

import auth from "./auth";
import type from "./type";
import product from "./product";
import size from "./size";

export default combineReducers({
  auth,
  type,
  product,
  size
});
