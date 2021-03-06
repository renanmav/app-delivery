/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { parseISO, formatDistanceToNow, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Creators } from '../ducks/order';

function* index() {
  try {
    const { token } = yield select(state => state.auth);

    const { data } = yield call(api.get, '/users/orders', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    data.map((order) => {
      const createdAt = parseISO(order.created_at);

      order.from_now = formatDistanceToNow(addHours(createdAt, -3), {
        locale: pt,
        includeSeconds: true,
      });

      return order;
    });

    yield put(Creators.indexSuccess(data));
  } catch (err) {
    yield put(Creators.indexFailure());
  }
}

export { index };
