import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { login } from "./auth";

import { Types as TypeTypes } from "../ducks/type";
import { index } from "./type";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(TypeTypes.INDEX_REQUEST, index)
  ]);
}
