import { call, put } from "redux-saga/effects";

import { Creators } from "../ducks/type";

import api from "~/services/api";

function* index() {
  try {
    const { data } = yield call(api.get, "/types");

    yield put(Creators.indexSuccess(data));
  } catch (err) {
    yield put(Creators.indexFailure());
  }
}

export { index };
