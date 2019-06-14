/**
 * ACTIONS
 */

export const Types = {
  INDEX_REQUEST: 'order/INDEX_REQUEST',
  INDEX_SUCCESS: 'order/INDEX_SUCCESS',
  INDEX_FAILURE: 'order/INDEX_FAILURE',
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  loading: false,
  orders: [],
};

export default function order(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.INDEX_REQUEST:
      return { ...state, loading: true };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: actions.payload.orders,
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
  indexSuccess: orders => ({
    type: Types.INDEX_SUCCESS,
    payload: { orders },
  }),
  indexFailure: () => ({
    type: Types.INDEX_FAILURE,
    payload: {},
  }),
};
