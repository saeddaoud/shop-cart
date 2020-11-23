import React from 'react';
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
        <span>{step1 === 'active' ? 'Cart' : 1}</span>
        <div></div>
      </div>
      <div className={step2}>
        <span>{step2 === 'active' ? 'Shipping Address' : 2}</span> <div></div>
      </div>
      <div className={step3}>
        <span>{step3 === 'active' ? 'Review Order' : 3}</span> <div></div>
      </div>
      <div className={step4}>
        <span>{step4 === 'active' ? 'Confirmation' : 4}</span> <div></div>
      </div>
    </div>
  );
};

export default StepArrowProgressBar;
