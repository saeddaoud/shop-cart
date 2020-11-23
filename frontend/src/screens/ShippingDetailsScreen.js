import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';

import './ShippingDetailsScreen.css';

const ShippingDetails = () => {
  return (
    <motion.div
      className='page shipping-page'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='container'>
        <StepArrowProgressBar step1='completed' step2='active' />
        <div className='shipping-info-card'>
          <h2>Shipping Address</h2>
          <div className='shipping-info'>
            <p>111-2222 MTL Street</p>
            <p>Montreal, QC, Canada</p>
            <p>Y1Y1Y1</p>
          </div>
        </div>
        <Link to='/review' className='confirm-btn btn'>
          Confirm
        </Link>
      </div>
    </motion.div>
  );
};

export default ShippingDetails;
