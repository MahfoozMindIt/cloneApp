import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> <span className='text-v3'> <span className='text-btnBg'>Ca</span>rds</span> </div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> Loans </div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> <span className='text-v4'><span className='text-btnBg'>3rd Party P</span>ayments</span> </div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> OTC Desk</div>
        {/* Duplicate items for seamless looping */}
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"><span>|</span> <span className='text-v3'> <span className='text-btnBg'>Ca</span>rds</span> </div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> Loans</div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> <span className='text-v4'><span className='text-btnBg'>3rd Party P</span>ayments</span></div>
        <div className="item flex gap-10 text-5xl md:text-8xl font-medium"> <span>|</span> OTC Desk</div>
      </div>
    </div>
  );
};

export default Slider;
