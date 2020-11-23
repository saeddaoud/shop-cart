import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getProductDetails } from '../actions/productActions';
import { PRODUCT_GET_RESET } from '../constants/productConstants';
import Rating from './Rating';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(item);
  // console.log(item);
  const { name, price, rating, _id, numReviews, image } = item;

  // const handleClick = () => {
  //   // dispatch({ type: PRODUCT_GET_RESET });
  //   history.push(`/product/${_id}`);
  //   // dispatch(getProductDetails(_id));
  // };

  return (
    <div className='card'>
      <div className='card__image'>
        <div className='image'>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className='card__details'>
        <Rating rating={rating} />
        <span className='num-reviews'>{numReviews} reviews</span>
        <div className='description'>{name}</div>
        <div className='price'>
          <span>${price}</span>
        </div>
      </div>
      <div className='card__actions'>
        <div className='view'>
          <Link to={`/product/${_id}`} className='btn'>
            View Details
          </Link>
        </div>
        {/* <div className='add-to-cart'>
          <a href='' className='btn'>
            Add To Cart
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
