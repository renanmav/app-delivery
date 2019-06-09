import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { login } from "./auth";

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login)]);
}
