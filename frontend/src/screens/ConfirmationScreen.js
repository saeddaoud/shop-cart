import { motion } from 'framer-motion';
import React from 'react';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';
import { v4 as uuidv4 } from 'uuid';

import './ConfirmationScreen.css';
import { Link } from 'react-router-dom';

const ConfirmationScreen = () => {
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
          step3='completed'
          step4='active'
        />
        <div className='confirmation'>
          <h4>Confirmation</h4>
          <p>
            Your order # {uuidv4()} is confirmed and expected to be delivered in
            the next 3 business days
          </p>
        </div>
        <div className='continue-btn'>
          <Link to='/' className='btn'>
            Continue Shopping
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmationScreen;
