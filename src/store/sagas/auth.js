import { call, put } from "redux-saga/effects";

import { Creators } from "../ducks/auth";

import api from "~/services/api";
import { navigate } from "~/services/navigation";

function* login(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(api.post, "/sessions", { email, password });

    const { token } = data;

    const { data: user } = yield call(api.get, "/sessions", {
      headers: {
        Authorization: "bearer " + token
      }
    });

    console.tron.log(user);

    yield put(Creators.loginSuccess(token, user));

    navigate("Types");
  } catch (err) {
    yield put(Creators.loginFailure());
  }
}

export { login };