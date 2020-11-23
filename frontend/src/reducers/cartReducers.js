import { CART_ADD, CART_UPDATE } from '../constants/cartConstants';

export const cartReducer = (state = { order: [] }, action) => {
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
    default:
      return state;
  }
};
