import React from 'react';

const Rating = ({ rating }) => {
  return [1, 2, 3, 4, 5].map((val, index) =>
    rating >= val ? (
      <span key={index}>
        <i className='fas fa-star star'></i>
      </span>
    ) : rating >= val - 0.5 ? (
      <span key={index}>
        <i className='fas fa-star-half-alt star'></i>
      </span>
    ) : (
      <span key={index}>
        <i className='far fa-star star'></i>
      </span>
    )
  );
};

export default Rating;
