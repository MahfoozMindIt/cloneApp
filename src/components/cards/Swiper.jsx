import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../styles/Swiper.css";

import { FaWallet } from "react-icons/fa";


export default function App() {
  return (
    <Swiper
      spaceBetween={30} // Adjust spacing between slides
      slidesPerView={2.5} // Show exactly 3 slides at a time
      centeredSlides={true} // Centers the active slide
      loop={true} // Infinite loop
      autoplay={{
        delay: 3000, // Auto-slide every 2 seconds
        disableOnInteraction: false,
      }} 
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
              480: { slidesPerView: 1, spaceBetween: 10 }, // Slightly bigger screens
              640: { slidesPerView: 1, spaceBetween: 10 }, 
              768: { slidesPerView: 1, spaceBetween: 10 }, 
              1024: { slidesPerView: 2, spaceBetween: 10 }, 
              1280: { slidesPerView: 2.5, spaceBetween: 40 }, 
            }}
      onSlideChange={() => console.log("Slide changed")}
      modules={[Autoplay]}
      className="mySwiper"
    >
      
      <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col bg-[rgba(0,0,0,0.1)] justify-between h-full p-5" style={{borderRadius:"7%"}}>
     <main>
            
            <div className="bg-black text-white rounded-full p-3 w-fit">
                <FaWallet/>
            </div>
            <p className="text-white font-medium text-xl">PAY</p>
            </main>
            <main>
                <h3 className="text-white text-xl">Make payment at 130M+ merchants globally</h3>
            </main>
     </section>

        </div></SwiperSlide>
      <SwiperSlide><div className='bg2 slide-content'>  <section className="flex flex-col bg-[rgba(0,0,0,0.1)] justify-between h-full p-5" style={{borderRadius:"7%"}}>
     <main>
            
            <div className="bg-black text-white rounded-full p-3 w-fit">
                <FaWallet/>
            </div>
            <p className="text-white font-medium text-xl">PAY</p>
            </main>
            <main>
                <h3 className="text-white text-xl">Make payment at 130M+ merchants globally</h3>
            </main>
     </section></div></SwiperSlide>
      <SwiperSlide><div className='bg3 slide-content'>  <section  className="flex flex-col bg-[rgba(0,0,0,0.1)] justify-between h-full p-5" style={{borderRadius:"7%"}}>
     <main>
            
            <div className="bg-black text-white rounded-full p-3 w-fit">
                <FaWallet/>
            </div>
            <p className="text-white font-medium text-xl">PAY</p>
            </main>
            <main>
                <h3 className="text-white text-xl">Make payment at 130M+ merchants globally</h3>
            </main>
     </section></div></SwiperSlide>
      <SwiperSlide><div className='bg4 slide-content'>  <section className="flex flex-col bg-[rgba(0,0,0,0.1)] justify-between h-full p-5" style={{borderRadius:"7%"}}>
     <main>
            
            <div className="bg-black text-white rounded-full p-3 w-fit">
                <FaWallet/>
            </div>
            <p className="text-white font-medium text-xl">PAY</p>
            </main>
            <main>
                <h3 className="text-white text-xl">Make payment at 130M+ merchants globally</h3>
            </main>
     </section></div></SwiperSlide>
      <SwiperSlide><div className='bg5 slide-content'>  <section className="flex flex-col bg-[rgba(0,0,0,0.1)] justify-between h-full p-5" style={{borderRadius:"7%"}}>
     <main>
            
            <div className="bg-black text-white rounded-full p-3 w-fit">
                <FaWallet/>
            </div>
            <p className="text-white font-medium text-xl">PAY</p>
            </main>
            <main>
                <h3 className="text-white text-xl">Make payment at 130M+ merchants globally</h3>
            </main>
     </section></div></SwiperSlide>
    </Swiper>
  );
}
