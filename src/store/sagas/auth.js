import { call, put } from 'redux-saga/effects';

import { Creators } from '../ducks/auth';

import api from '~/services/api';
import { navigateAndResetHistory } from '~/services/navigation';

// eslint-disable-next-line consistent-return
function* login(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(api.post, '/sessions', { email, password });

    const { token } = data;

    const { data: user } = yield call(api.get, '/sessions', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    // admins can't login to app
    if (user.is_admin) return yield put(Creators.loginFailure());

    yield put(Creators.loginSuccess(token, user));

    return navigateAndResetHistory('Types');
  } catch (err) {
    yield put(Creators.loginFailure());
  }
}

function* createUser(action) {
  try {
    const { name, email, password } = action.payload;
    yield call(api.post, '/users', {
      name,
      email,
      password,
      password_confirmation: password,
    });

    yield put(Creators.signupSuccess());

    navigateAndResetHistory('Login');
  } catch (err) {
    yield put(
      Creators.signupFailure('Algo deu errado. Verifique se o seu email já não foi cadastrado.'),
    );
  }
}

export { login, createUser };
