import { combineReducers } from 'redux';

import auth from './auth';
import type from './type';
import product from './product';
import size from './size';
import cart from './cart';
import order from './order';

export default combineReducers({
  auth,
  type,
  product,
  size,
  cart,
  order,
});
