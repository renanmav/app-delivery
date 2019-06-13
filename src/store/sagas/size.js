import { call, put } from 'redux-saga/effects';

import { Creators } from '../ducks/size';

import api from '~/services/api';

function* index(action) {
  try {
    const { data: sizes } = yield call(api.get, `/products/${action.payload.product_id}/sizes`);

    yield put(Creators.indexSuccess(sizes));
  } catch (err) {
    yield put(Creators.indexFailure());
  }
}

export { index };
