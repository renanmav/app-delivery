/* eslint-disable no-return-assign */
import { navigateAndResetHistory } from '~/services/navigation';

/**
 * ACTIONS
 */

export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
  ORDER_REQUEST: 'cart/ORDER_REQUEST',
  ORDER_SUCCESS: 'cart/ORDER_SUCCESS',
  ORDER_FAILURE: 'cart/ORDER_FAILURE',
};

/**
 * REDUCER
 */

const INITIAL_STATE = {
  items: [],
  sizes_id: [],
  total_price: 0,
  cep: '',
  street: '',
  number: '',
  district: '',
};

export default function cart(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.ADD_ITEM: {
      const items = [...state.items, actions.payload.item];
      const sizesId = [...state.sizes_id, actions.payload.size_id];

      let totalPrice = 0;

      items.map(item => (totalPrice += item.price));

      navigateAndResetHistory('Types');

      return {
        ...state,
        sizes_id: sizesId,
        items,
        total_price: totalPrice,
      };
    }
    case Types.REMOVE_ITEM: {
      state.items.splice(actions.payload.index, 1);
      state.sizes_id.splice(actions.payload.index, 1);

      let totalPrice = 0;

      state.items.map(item => (totalPrice += item.price));

      return {
        ...state,
        total_price: totalPrice,
      };
    }
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
    payload: {},
  }),
  createFailure: () => ({
    type: Types.ORDER_FAILURE,
    payload: {},
  }),
};
