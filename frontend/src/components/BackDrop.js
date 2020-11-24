import React from 'react';
import './BackDrop.css';

const BackDrop = ({ onClick }) => {
  return <div className='backdrop' onClick={() => onClick(false)}></div>;
};

export default BackDrop;
