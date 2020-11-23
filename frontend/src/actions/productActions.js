import axios from 'axios';

const {
  PRODUCT_GET_SUCCESS,
  PRODUCTS_GET_ALL_FAIL,
  PRODUCTS_GET_ALL_REQUEST,
  PRODUCTS_GET_ALL_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_FAIL,
} = require('../constants/productConstants');

export const getProductsList = () => async (dispatch) => {
  // console.log('hello');
  try {
    dispatch({
      type: PRODUCTS_GET_ALL_REQUEST,
    });

    const { data } = await axios.get('/api/products');

    // console.log(data);

    dispatch({
      type: PRODUCTS_GET_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_GET_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: PRODUCT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
