/* eslint-disable no-undef */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure({
    host: '10.0.3.2',
  })
    .useReactNative()
    .connect();
}
