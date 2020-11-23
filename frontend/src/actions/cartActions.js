import { CART_ADD, CART_UPDATE } from '../constants/cartConstants';

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: CART_ADD,
    payload: item,
  });
  // localStorage.setItem('user-order', JSON.stringify(getState().cart.order));
};

export const updateCart = (item) => (dispatch) => {
  dispatch({
    type: CART_UPDATE,
    payload: item,
  });
  // localStorage.setItem('user-order', JSON.stringify(getState().cart.order));
};
