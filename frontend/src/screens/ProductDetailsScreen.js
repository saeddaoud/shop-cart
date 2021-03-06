import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import Rating from '../components/Rating';
import { addToCart } from '../actions/cartActions';
import Spinner from '../components/Spinner';
import { getProductDetails } from '../actions/productActions';

const ProductDetailsScreen = ({ match }) => {
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  // useEffect(() => {
  //   console.log(loading, product);
  // }, []);

  const [qty, setQty] = useState(1);

  const handleOnClick = () => {
    dispatch(addToCart({ ...product, qty: Number(qty) }));
  };

  return (
    <motion.div
      className='page product-page'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='container'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          product && (
            <div className='product-details'>
              <h1 className='product-name'>{product.name}</h1>
              <span className='product-price'>
                <strong>Price: </strong>${product.price}
              </span>
              <div className='rating'>
                <Rating rating={product.rating} />
                <span className='num-reviews'>
                  {product.numReviews} reviews
                </span>
              </div>
              <div className='product-image'>
                <img src={product.image} alt='product' />
              </div>
              <div className='product-description'>
                <p>{product.description}</p>
              </div>
              <div className='product-actions'>
                <div className='product-qty'>
                  <span>Qty: </span>
                  <select
                    name='qty'
                    id='qty'
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {/* <option value=''>...</option> */}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
                <div className='product-cart'>
                  <button className='btn' onClick={handleOnClick}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailsScreen;
