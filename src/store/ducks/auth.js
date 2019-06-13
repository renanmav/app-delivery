/**
 * ACTIONS
 */

export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  token: '',
  error: false,
  user: {},
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
    payload: {},
  }),
};
