import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { order } = useSelector((state) => state.cart);
  // let totalItems = order.reduce((acc, cur) => acc + cur.qty, 0);
  const totalItems = order.length;

  // useEffect(() => {

  // }, [order]);

  return (
    <header>
      <nav className='navbar flex'>
        <div className='container'>
          <div className='navbar__items'>
            <div className='logo'>
              <Link to='/'>ShopCart</Link>{' '}
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fas fa-shopping-cart'></i>
              </Link>
              {totalItems > 0 && (
                <div className='cart__items'>
                  <span>{totalItems}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
