import React, { useEffect, useState } from 'react';
import StepArrowProgressBar from '../UI/StepArrowProgressBar';
import { motion } from 'framer-motion';

import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.cart);

  const [qty, setQty] = useState(1);
  const [id, setId] = useState(null);
  const [product, setProduct] = useState({});
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (changed) dispatch(updateCart({ ...product, qty: Number(qty) }));
  }, [qty, product, changed]);

  return (
    <motion.div
      className='page product-page'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className='container'>
        {order.length === 0 ? (
          <h1>There is no items in the cart</h1>
        ) : (
          <>
            <StepArrowProgressBar step1='active' />
            <div className='order'>
              <div className='order-details'>
                <h1>Order Details</h1>
                <div className='details-card'>
                  {/* <div className='details-card__image'>
                <img src={phone} alt='' />
              </div> */}
                  <ul>
                    {order.map((item) => (
                      <li key={item._id}>
                        <div className='details-card__name details-card__row'>
                          <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </div>
                        <div className='details-card__row'>
                          <span>Qty: </span>
                          <span>Price</span>
                        </div>

                        <div className='details-card__qty details-card__row'>
                          <select
                            name='qty'
                            id='qty'
                            value={item.qty}
                            onChange={(e) => {
                              setQty(e.target.value);
                              setId(item.id);
                              setProduct(item);
                              setChanged(true);
                              // setQty(e.target.value);
                              // setId(item.id);
                              // setChanged(true);
                            }}
                          >
                            {/* <option value=''>...</option> */}
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                          </select>

                          <span>
                            ${parseFloat(item.qty * item.price).toFixed(2)}
                          </span>
                        </div>

                        <div className='h-line'></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='price-details'>
                <h1>Subtotal</h1>
                <span className='order-price'>
                  $
                  {parseFloat(
                    order.reduce((acc, cur) => acc + cur.qty * cur.price, 0)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CartScreen;
