import {
  CART_ADD,
  CART_UPDATE,
  ITEM_DELETE,
  SHIPPING_ADDRESS_SET,
} from '../constants/cartConstants';

export const addToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD,
    payload: item,
  });
  localStorage.setItem('user-order', JSON.stringify(getState().cart.order));
};

export const updateCart = (item) => (dispatch, getState) => {
  dispatch({
    type: CART_UPDATE,
    payload: item,
  });
  localStorage.setItem('user-order', JSON.stringify(getState().cart.order));
};

export const deleteItemFromCart = (itemId) => (dispatch, getState) => {
  dispatch({
    type: ITEM_DELETE,
    payload: itemId,
  });
  localStorage.setItem('user-order', JSON.stringify(getState().cart.order));
};

export const setShippingAddress = (address) => (dispatch, getState) => {
  dispatch({
    type: SHIPPING_ADDRESS_SET,
    payload: address,
  });
  localStorage.setItem(
    'shipping-address',
    JSON.stringify(getState().cart.shippingAddress)
  );
};
