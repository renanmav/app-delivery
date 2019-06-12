/**
 * ACTIONS
 */

export const Types = {
  ADD_ITEM: "cart/ADD_ITEM",
  REMOVE_ITEM: "cart/REMOVE_ITEM",
  ORDER_REQUEST: "cart/ORDER_REQUEST",
  ORDER_SUCCESS: "cart/ORDER_SUCCESS",
  ORDER_FAILURE: "cart/ORDER_FAILURE"
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  items: [],
  sizes_id: [],
  total_price: 0,
  cep: "",
  street: "",
  number: "",
  district: ""
};

export default function cart(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.ADD_ITEM:
      return { ...state };
    case Types.REMOVE_ITEM:
      return { ...state };
    default:
      return { ...state };
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  createSuccess: () => ({
    type: Types.ORDER_SUCCESS,
    payload: {}
  }),
  createFailure: () => ({
    type: Types.ORDER_FAILURE,
    payload: {}
  })
};