import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';

import './PlaceOrderScreen.css';

const PlaceOrderScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const { street, apt, city, country, province, postalCode } = shippingAddress;
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
            <h2>Price</h2>
            <div className='total-price-details-item'>
              <span>items</span>
              <span>$300</span>
            </div>
          </div>
          <Link to='/review' className='confirm-btn btn'>
            Place Order
          </Link>
          <div className='personal-info'>
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
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceOrderScreen;
