/**
 * ACTIONS
 */

export const Types = {
  INDEX_REQUEST: "product/INDEX_REQUEST",
  INDEX_SUCCESS: "product/INDEX_SUCCESS",
  INDEX_FAILURE: "product/INDEX_FAILURE"
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  products: []
};

export default function product(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.INDEX_REQUEST:
      return { ...state, loading: true };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        products: actions.payload.products,
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
  indexRequest: type_id => ({
    type: Types.INDEX_REQUEST,
    payload: { type_id }
  }),
  indexSuccess: products => ({
    type: Types.INDEX_SUCCESS,
    payload: { products }
  }),
  indexFailure: () => ({
    type: Types.INDEX_FAILURE,
    payload: {}
  })
};
