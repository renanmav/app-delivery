/**
 * ACTIONS
 */

export const Types = {
  INDEX_REQUEST: 'type/INDEX_REQUEST',
  INDEX_SUCCESS: 'type/INDEX_SUCCESS',
  INDEX_FAILURE: 'type/INDEX_FAILURE',
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  types: [],
};

export default function type(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.INDEX_REQUEST:
      return { ...state, loading: true };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        types: actions.payload.types,
        loading: false,
      };
    case Types.INDEX_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  indexSuccess: types => ({
    type: Types.INDEX_SUCCESS,
    payload: { types },
  }),
  indexFailure: () => ({
    type: Types.INDEX_FAILURE,
    payload: {},
  }),
};
