/**
 * ACTIONS
 */

export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'auth/SIGNUP_FAILURE',
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  token: '',
  error: false,
  user: {},
  errorMessage: '',
};

export default function auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        token: actions.payload.token,
        user: actions.payload.user,
        loading: false,
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: actions.payload.message,
      };
    default:
      return { ...state };
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  loginSuccess: (token, user) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token, user },
  }),
  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),
  signupSuccess: () => ({
    type: Types.SIGNUP_SUCCESS,
  }),
  signupFailure: message => ({
    type: Types.SIGNUP_FAILURE,
    payload: { message },
  }),
};
