/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators } from '../ducks/order';

function* index() {
  try {
    const { token } = yield select(state => state.auth);

    const { data } = yield call(api.get, '/users/orders', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(Creators.indexSuccess(data));
  } catch (err) {
    yield put(Creators.indexFailure());
  }
}

export { index };
