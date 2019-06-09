/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(() => [], composer);

export default store;
