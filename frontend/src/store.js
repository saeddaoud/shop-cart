import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducer,
  productsListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const middleware = [thunk];

const orderFromLocalStorage = localStorage.getItem('user-order')
  ? JSON.parse(localStorage.getItem('user-order'))
  : [];
const shippingAddressFromLocalStorage = localStorage.getItem('shipping-address')
  ? JSON.parse(localStorage.getItem('shipping-address'))
  : {
      street: '2222 MTL Ave.',
      apt: '111',
      city: 'Montreal',
      country: 'Canada',
      province: 'QC',
      postalCode: 'Y1Y1Y1',
    };

const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const initialState = {
  cart: {
    order: orderFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
