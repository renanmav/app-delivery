/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducers from './ducks';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(rootReducers, composer);

export default store;
