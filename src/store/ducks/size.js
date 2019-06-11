/**
 * ACTIONS
 */

export const Types = {
  INDEX_REQUEST: "size/INDEX_REQUEST",
  INDEX_SUCCESS: "size/INDEX_SUCCESS",
  INDEX_FAILURE: "size/INDEX_FAILURE"
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  sizes: []
};

export default function type(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.INDEX_REQUEST:
      return { ...state, loading: true };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        sizes: actions.payload.sizes,
        loading: false
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
  indexRequest: product_id => ({
    type: Types.INDEX_REQUEST,
    payload: { product_id }
  }),
  indexSuccess: sizes => ({
    type: Types.INDEX_SUCCESS,
    payload: { sizes }
  }),
  indexFailure: () => ({
    type: Types.INDEX_FAILURE,
    payload: {}
  })
};
