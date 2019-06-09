import { call, put } from "redux-saga/effects";

import { Creators } from "../ducks/auth";

import api from "~/services/api";
import { navigate } from "~/services/navigation";

function* login(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(api.post, "/sessions", { email, password });

    const { token } = data;

    yield put(Creators.loginSuccess(token));

    navigate("Types");
  } catch (err) {
    yield put(Creators.loginFailure(err.message));
  }
}

export { login };
