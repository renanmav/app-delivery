import { call, put } from 'redux-saga/effects';

import { Creators } from '../ducks/product';

import api from '~/services/api';

function* index(action) {
  try {
    const { data } = yield call(api.get, `/types/${action.payload.type_id}/products`);

    yield put(Creators.indexSuccess(data));
  } catch (err) {
    yield put(Creators.indexFailure());
  }
}

export { index };
