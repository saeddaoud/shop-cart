import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart } from '../actions/cartActions';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';

import './PlaceOrderScreen.css';

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const { order, shippingAddress } = useSelector((state) => state.cart);
  const { street, apt, city, country, province, postalCode } = shippingAddress;

  const totalItemPrice = parseFloat(
    order.reduce((acc, cur) => acc + cur.qty * cur.price, 0)
  ).toFixed(2);
  const shippingCost = parseFloat(10).toFixed(2);
  const totalTaxPrice = parseFloat(totalItemPrice * 0.14).toFixed(2);
  const totalPrice =
    Number(totalItemPrice) + Number(totalTaxPrice) + Number(shippingCost);

  const handleClick = () => {
    dispatch(emptyCart());
  };
  return (
    <motion.div
      className='page shipping-page'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='container'>
        <StepArrowProgressBar
          step1='completed'
          step2='completed'
          step3='active'
        />
        <div className='place-order-details'>
          <div className='total-price-details'>
            <h4>Price Details</h4>
            <div className='total-price-details-item'>
              <span>Items</span>
              <span>${totalItemPrice}</span>
            </div>
            <div className='total-price-details-item'>
              <span>Shipping</span>
              <span>${shippingCost}</span>
            </div>
            <div className='total-price-details-item'>
              <span>Tax</span>
              <span>${totalTaxPrice}</span>
            </div>
            <div className='h-line'></div>
            <div className='total-price-details-item'>
              <span>Total</span>
              <span>${parseFloat(totalPrice).toFixed(2)}</span>
            </div>
          </div>

          <div className='personal-info'>
            <h4>Shipping Address</h4>
            <p>John Doe</p>
            <div className='shipping-info'>
              <p>
                {apt}-{street}
              </p>
              <p>
                {city}, {province}, {country}
              </p>
              <p>{postalCode}</p>
              <p>111-111-1111</p>
            </div>
          </div>
          <div className='order-items'>
            <h4>Order's Items</h4>
            <div className='details-card'>
              {/* <div className='details-card__image'>
                <img src={phone} alt='' />
              </div> */}
              <ul>
                {order.map((item) => {
                  return (
                    <li key={item._id}>
                      <div className='details-card__name details-card__row'>
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </div>
                      <div className='h-line'></div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <Link
            to='/confirmation'
            className='confirm-btn btn'
            onClick={handleClick}
          >
            Place Order
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceOrderScreen;
