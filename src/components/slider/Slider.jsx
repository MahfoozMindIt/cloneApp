import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="item">| Cards </div>
        <div className="item">| Loans</div>
        <div className="item">| 3rd Party Payments</div>
        <div className="item">| OTC Desk</div>
        {/* Duplicate items for seamless looping */}
        <div className="item">| Cards </div>
        <div className="item">| Loans</div>
        <div className="item">| 3rd Party Payments</div>
        <div className="item">| OTC Desk</div>
      </div>
    </div>
  );
};

export default Slider;
