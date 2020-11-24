import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../components/BackDrop';
import Form from '../components/Form';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';

import './ShippingDetailsScreen.css';

const ShippingDetails = () => {
  const [update, setUpdate] = useState(false);
  const [address, setAddress] = useState({
    street: '2222 MTL Ave.',
    apt: '111',
    city: 'Montreal',
    country: 'Canada',
    province: 'QC',
    postalCode: 'Y1Y1Y1',
  });

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
        {update && (
          <>
            <BackDrop onClick={setUpdate} />
            <Form
              address={address}
              updateAddress={setAddress}
              onUpdate={setUpdate}
              update={update}
            />
          </>
        )}
        <div className='shipping-info-card'>
          <div className='shipping-info-card-row'>
            <h2>Shipping Address</h2>
            <button className='edit-btn' onClick={() => setUpdate(true)}>
              <i className='far fa-edit'></i>
            </button>
          </div>
          <div className='shipping-info'>
            <p>
              {address.apt}-{address.street}
            </p>
            <p>
              {address.city}, {address.province}, {address.country}
            </p>
            <p>{address.postalCode}</p>
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
