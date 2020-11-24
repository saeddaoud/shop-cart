import { motion } from 'framer-motion';
import React from 'react';

import './Form.css';

const Form = ({ address, updateAddress, onUpdate, update }) => {
  console.log('form', update);
  //   const [street, setStreet] = useState(street);
  //   const [apt, setApt] = useState(apt);
  //   const [city, setCity] = useState(city);
  //   const [province, setProvince] = useState(province);
  //   const [country, setCountry] = useState(country);
  //   const [postalCode, setPostalCode] = useState(postalCode);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(false);
  };

  return (
    // <motion.div
    //   className='page shipping-page'
    //   exit={{ opacity: 0.5 }}
    //   initial={{ opacity: 0.5 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    <form className='form' onSubmit={handleSubmit}>
      <h1>Shipping Address</h1>
      <div className='form-control'>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          name='street'
          value={address.street}
          placeholder='street'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor='apt'>Apartment</label>
        <input
          type='text'
          name='apt'
          value={address.apt}
          placeholder='apartment'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          name='city'
          value={address.city}
          placeholder='City'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor='province'>Province</label>
        <input
          type='text'
          name='province'
          value={address.province}
          placeholder='Province'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor='country'>Country</label>
        <input
          type='text'
          name='country'
          value={address.country}
          placeholder='country'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <label htmlFor='postalCode'>Postal Code</label>
        <input
          type='text'
          name='postalCode'
          value={address.postalCode}
          placeholder='Postal Code'
          onChange={(e) =>
            updateAddress({ ...address, [e.target.name]: e.target.value })
          }
        />
      </div>
      <button type='submit' className='btn btn-light'>
        Update
      </button>
    </form>
    // </motion.div>
  );
};

export default Form;
