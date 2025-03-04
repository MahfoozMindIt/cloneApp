import React, { useRef } from 'react';
import Gpay from "../../../assets/googleicon.png";
import Ipay from "../../../assets/payicon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import sideImage from '../../../assets/group.png';
import './Section2.css'

const Section2 = () => {
  const swiperRef = useRef(null);

  // Function to change slides on button click
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className='w-full flex flex-col items-center justify-center pt-32 relative'>
      <main className='w-[85%] flex flex-col xl:flex-row justify-center items-center relative'>
        {/* Left Section with Swiper */}
        <main className='lg:w-[60%] relative'>
          <div className='lg:w-[65%] hidden lg:block relative'>
            <section className='flex'>
              <Swiper
                effect="coverflow"
                spaceBetween={2000} // Adjust spacing between slides
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 1,
                  depth: 1,
                  modifier: 50,
                  slideShadows: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                {/* Virtual Card Slide */}
                <SwiperSlide>
                  <div className='flex flex-col gap-10 w-[650px]'>
                    <div>
                      <h2 className='text-5xl font-semibold'>VIRTUAL CARD</h2>
                      <h2 className='text-4xl font-medium'>ANYTIME, ANYWHERE</h2>
                    </div>
                    <ul className='list-disc ml-10 text-[20px] flex flex-col gap-5'>
                      <li>Instant transaction</li>
                      <li>Widely-accepted</li>
                      <li>Compatible with Apple Pay/Google Pay</li>
                    </ul>
                    <div className='pt-5 text-white flex items-center gap-5'>
                      <button className='lg:w-[40%] py-4 rounded-full bg-btnBg text-xl hover:bg-hoverBg cursor-pointer'>Get your card</button>
                      <div className='flex'>
                        <img src={Gpay} alt="" />
                        <img src={Ipay} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Physical Card Slide */}
                <SwiperSlide>
                  <div className='flex flex-col gap-10 w-[650px]'>
                    <div>
                      <h2 className='text-5xl font-semibold'>PHYSICAL CARD</h2>
                      <h2 className='text-4xl font-medium'>ONE CARD FOR ALL</h2>
                    </div>
                    <ul className='list-disc ml-10 text-[20px] flex flex-col gap-5'>
                      <li>Tap and Pay</li>
                      <li>ATM Withdrawal</li>
                    </ul>
                    <div className='pt-5 text-white flex items-center gap-5'>
                      <button className='lg:w-[40%] py-4 rounded-full bg-btnBg text-xl hover:bg-hoverBg cursor-pointer'>Get your card</button>
                      <div className='flex'>
                        <img src={Gpay} alt="" />
                        <img src={Ipay} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </section>
          </div>

          {/* Buttons Positioned Inside Main Section */}
          <div className="absolute top-[450px]  right-0 flex justify-center gap-14">
            <button 
              onClick={() => goToSlide(0)}
              className='text-[20px] font-medium   transition cursor-pointer'
            >
              Virtual Card
            </button>
            <button 
              onClick={() => goToSlide(1)}
              className='text-[20px] font-medium  transition cursor-pointer'
            >
              Physical Card
            </button>
          </div>

        </main>

        {/* Right Section with Image */}
        <main className='flex justify-center items-center'>
          <img src={sideImage} alt="" className='object-contain mb-60' />
        </main>
      </main>
    </section>
  );
};

export default Section2;
