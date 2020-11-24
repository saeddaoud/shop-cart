import {
  CART_ADD,
  CART_UPDATE,
  SHIPPING_ADDRESS_SET,
} from '../constants/cartConstants';

const initialState = {
  order: [],
  shippingAddress: {
    street: '2222 MTL Ave.',
    apt: '111',
    city: 'Montreal',
    country: 'Canada',
    province: 'QC',
    postalCode: 'Y1Y1Y1',
  },
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD:
      const alreadyInCart =
        state.order.filter((el) => el._id === payload._id).length > 0
          ? true
          : false;

      return {
        ...state,
        order: alreadyInCart
          ? state.order.map((el) =>
              el._id === payload._id
                ? { ...payload, qty: el.qty + payload.qty }
                : el
            )
          : [...state.order, payload],
      };
    case CART_UPDATE:
      return {
        ...state,
        order: state.order.map((el) => (el._id === payload._id ? payload : el)),
      };
    case SHIPPING_ADDRESS_SET:
      return {
        ...state,
        shippingAddress: payload,
      };
    default:
      return state;
  }
};
