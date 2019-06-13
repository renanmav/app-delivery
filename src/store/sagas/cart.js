/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects';

import { Creators } from '../ducks/cart';

import api from '~/services/api';
import { navigateAndResetHistory } from '~/services/navigation';

function* createOrder(action) {
  try {
    const {
      cep, street, number, district, observation,
    } = action.payload;

    const { total_price, sizes_id } = yield select(state => state.cart);

    const { token } = yield select(state => state.auth);

    yield call(
      api.post,
      '/orders',
      {
        total_price,
        sizes_id,
        cep,
        street,
        number,
        district,
        observation,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );

    yield put(Creators.createSuccess());

    navigateAndResetHistory('Types');
  } catch (err) {
    yield put(Creators.createFailure());
  }
}

export { createOrder };
