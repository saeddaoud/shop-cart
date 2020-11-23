import {
  PRODUCTS_GET_ALL_FAIL,
  PRODUCTS_GET_ALL_REQUEST,
  PRODUCTS_GET_ALL_SUCCESS,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_FAIL,
  PRODUCT_GET_RESET,
} from '../constants/productConstants';

export const productsListReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_GET_ALL_REQUEST:
      return {
        loading: true,
      };
    case PRODUCTS_GET_ALL_SUCCESS:
      return { loading: false, success: true, products: payload };
    case PRODUCTS_GET_ALL_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true };
    case PRODUCT_GET_SUCCESS:
      return { loading: false, success: true, product: payload };
    case PRODUCT_GET_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_GET_RESET:
      return {};
    default:
      return state;
  }
};
