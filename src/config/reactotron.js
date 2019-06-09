import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  host: '10.0.3.2',
})
  .useReactNative()
  .connect();
