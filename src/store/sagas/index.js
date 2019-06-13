import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { login } from './auth';

import { Types as TypeTypes } from '../ducks/type';
import { index as indexTypes } from './type';

import { Types as ProductTypes } from '../ducks/product';
import { index as indexProducts } from './product';

import { Types as SizeTypes } from '../ducks/size';
import { index as indexSizes } from './size';

import { Types as CartTypes } from '../ducks/cart';
import { createOrder } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(TypeTypes.INDEX_REQUEST, indexTypes),
    takeLatest(ProductTypes.INDEX_REQUEST, indexProducts),
    takeLatest(SizeTypes.INDEX_REQUEST, indexSizes),
    takeLatest(CartTypes.ORDER_REQUEST, createOrder),
  ]);
}
