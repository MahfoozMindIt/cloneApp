import React, { useRef, useState } from 'react';
import Gpay from "../../../assets/googleicon.png";
import Ipay from "../../../assets/payicon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import sideImage from '../../../assets/group.png';
import cards from '../../../assets/banner.png';
import './Section2.css'
import { MdArrowBack, MdOutlineArrowForward } from 'react-icons/md';

const Section2 = () => {
  const swiperRef = useRef(null);
  const [cardView,setCardView]=useState(false);


  // Function to change slides on button click
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const secondSlide= ( <main className='xl:w-[90%] flex flex-col lg:flex-row justify-center items-center '>
   
   

<div className='flex flex-col gap-10 w-full'>
  <div>
    <h2 className='text-4xl font-semibold'>VIRTUAL CARD</h2>
    <h2 className='text-3xl font-medium'>ANYTIME, ANYWHERE</h2>
  </div>
  <ul className='list-disc ml-10 text-[16px] flex flex-col gap-5'>
    <li>Instant transaction</li>
    <li>Widely-accepted</li>
    <li>Compatible with Apple Pay/Google Pay</li>
  </ul>
  <div className='pt-5 text-white flex items-center gap-5'>
    <button className='w-full py-4 rounded-full bg-btnBg xl:text-xl hover:bg-hoverBg cursor-pointer'>
      Get your card
    </button>
    <div className='flex'>
      <img src={Gpay} alt="" />
      <img src={Ipay} alt="" />
    </div>
  </div>
</div>
</main>);
  const firstSlide= ( <main className='xl:w-[90%] flex flex-col lg:flex-row justify-center items-center '>
 
   

<div className='flex flex-col gap-10 w-full'>
  <div>
    <h2 className='text-4xl font-semibold'>PHYSICAL CARD</h2>
    <h2 className='text-3xl font-medium'>ONE CARD FOR All</h2>
  </div>
  <ul className='list-disc ml-10 text-[18px] flex flex-col gap-5'>
    <li>Tap and Pay</li>
    <li>
    ATM withdrawal</li>
  </ul>
  <div className='pt-5 text-white flex items-center gap-5'>
    <button className='w-full py-4 rounded-full bg-btnBg xl:text-xl hover:bg-hoverBg cursor-pointer'>
      Get your card
    </button>
    <div className='flex'>
      <img src={Gpay} alt="" />
      <img src={Ipay} alt="" />
    </div>
  </div>
</div>
</main>);


  return (
    <section className='w-full flex flex-col text-black items-center justify-center py-32'>
      <main className='xl:w-[90%] flex flex-col lg:flex-row justify-center items-center '>
        {/* Left Section with Swiper */}
        <main className='lg:w-[50%] w-full flex flex-col items-center justify-center'>
          <div className='lg:w-[85%] w-[99%] hidden lg:block'>
            <section className='flex'>
            <Swiper
  effect="coverflow"
  spaceBetween={20} // Reduce space to prevent shifting
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  centeredSlides={false} // Set to false for better small screen behavior
  breakpoints={{
    640: { slidesPerView: -10, spaceBetween: 10, centeredSlides: false },
    768: { slidesPerView: -5, spaceBetween: 1, centeredSlides: false },
    1024: { slidesPerView: 1, spaceBetween: 30, centeredSlides: true },
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 10,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  }}
  modules={[Autoplay, EffectCoverflow]}
  className="mySwiper w-full"
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  <SwiperSlide>
    <div className='flex flex-col gap-10 w-full'>
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
        <button className='xl:w-[40%] w-[45%] py-4 rounded-full bg-btnBg xl:text-xl hover:bg-hoverBg cursor-pointer'>
          Get your card
        </button>
        <div className='flex'>
          <img src={Gpay} alt="" />
          <img src={Ipay} alt="" />
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className='flex flex-col gap-10 w-full'>
      <div>
        <h2 className='text-5xl font-semibold'>PHYSICAL CARD</h2>
        <h2 className='text-4xl font-medium'>ANYTIME, ANYWHERE</h2>
      </div>
      <ul className='list-disc ml-10 text-[20px] flex flex-col gap-5'>
        <li>Instant transaction</li>
        <li>Widely-accepted</li>
        <li>Compatible with Apple Pay/Google Pay</li>
      </ul>
      <div className='pt-5 text-white flex items-center gap-5'>
        <button className='xl:w-[40%] w-[45%] py-4 rounded-full bg-btnBg xl:text-xl hover:bg-hoverBg cursor-pointer'>
          Get your card
        </button>
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

      
 
        </main>


<div className='lg:hidden'>
  
<button onClick={()=>setCardView(!cardView)} className='text-xl mb-20'>
{cardView ?(<p className='flex items-center gap-5 font-medium'>VIRTUAL CARD <span><MdOutlineArrowForward/></span></p>): (<p className='flex items-center gap-5 font-medium'>  <span><MdArrowBack/></span> PHYSICAL CARD</p>) }
</button>
{cardView ? firstSlide: secondSlide }

</div>



        {/* Right Section with Image */}
        <main className='flex justify-center items-center'>
          <img src={cards} alt="" className='object-contain' />
        </main>
      </main>
      <main className='w-full hidden lg:flex justify-center'>
     <div className="  flex justify-center gap-14">
            <button 
              onClick={() => goToSlide(0)}
              className='text-[20px] font-medium hover:text-btnBg   transition cursor-pointer'
            >
              Virtual Card
            </button>
            <button 
              onClick={() => goToSlide(1)}
              className='text-[20px] font-medium hover:text-btnBg  transition cursor-pointer'
            >
              Physical Card
            </button>
          </div>
     </main>

    </section>
  );
};

export default Section2;
