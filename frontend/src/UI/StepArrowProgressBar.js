import React from 'react';
import { Link } from 'react-router-dom';
import './StepArrowProgressBar.css';

const StepArrowProgressBar = ({
  step1 = '',
  step2 = '',
  step3 = '',
  step4 = '',
}) => {
  return (
    <div className='display-table'>
      <div className={step1}>
        {step1 === 'completed' ? (
          <Link to='/cart'>
            <span>{step1 === 'active' ? 'Cart' : 1}</span>
          </Link>
        ) : (
          <span>{step1 === 'active' ? 'Cart' : 1}</span>
        )}
        <div></div>
      </div>
      <div className={step2}>
        {step2 === 'completed' ? (
          <Link to='/shipping'>
            <span>{step2 === 'active' ? 'Shipping Address' : 2}</span>
          </Link>
        ) : (
          <span>{step2 === 'active' ? 'Shipping Address' : 2}</span>
        )}
        <div></div>
      </div>
      <div className={step3}>
        {step3 === 'completed' ? (
          <Link to='/review'>
            <span>{step3 === 'active' ? 'Review Order' : 3}</span>
          </Link>
        ) : (
          <span>{step3 === 'active' ? 'Review Order' : 3}</span>
        )}
        <div></div>
      </div>
      <div className={step4}>
        {<span>{step4 === 'active' ? 'Confirmation' : 4}</span>}
        <div></div>
      </div>
    </div>
  );
};

export default StepArrowProgressBar;
