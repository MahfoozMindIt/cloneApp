import React, { useRef } from 'react'
import "../styles/Cards.css"
import telegram from "../assets/telegram.svg"
import icon1 from "../assets/icon1.svg"
import Slider from '../components/cards/slides/Slides'
import Swiper from '../components/cards/Swiper'
import Section3 from '../components/cards/thirdSection/Section3'
import Section2 from '../components/cards/2ndSection/Section2'
import Section4 from '../components/cards/4rthSection/Section4'
import cardHome from "../assets/cardHome.png"

const Cards = () => {
 
  return (
    <section className=' '>
    <div className=' banner flex justify-center items-center flex-col text-white '>
   <main  className='flex widthCard  lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-between gap-20 lg:gap-0'>
   <div className=' flex flex-col   xl:pt-32'>
  <div className='xl:text-[90px] text-5xl lg:text-6xl  xl:leading-28 font-semibold'>
  <h1 className='text-center lg:text-start'>
        
        SPEND CRYPTO
              </h1>
              <h1 className='text-center lg:text-start'>
                LIKE FIAT
              </h1>
  </div>


              {/* <div className='mt-5 flex justify-between'>
    <section>
    <p className='text-[26px] '>
Seamless payment with your cryptocurrencies</p>

<div className='mt-16'>
    <button className='text-xl bg-white text-black rounded-full px-10 py-3'>
        Get the app
    </button>
</div>
    </section>
    <section className='hidden'>
<p className='text-[17px] font-medium'>Total Balance</p>
<h2 className='text-4xl'>$ 3,868.24</h2>

<div className='flex items-center gap-3 mt-14'>
<img src={telegram} alt="" className='rounded-full'/>
<div className='flex  justify-between font-medium w-[250px] '>
<span>
    Telegram
</span>
<span>
    -9.9 USD
</span>
</div>
</div>
<div className='flex  items-center gap-3 mt-5'>
    <img src={icon1} alt="" className='rounded-full'/>
    <div className='flex  justify-between font-medium w-[250px]'>
<span>
    Starbucks Coffee
</span>
<span>
    -5.8 USD
</span>
</div>
</div>
    </section>
</div> */}
<p className='lg:text-2xl text-xl mt-5'>
Accepted by 130M+ merchants worldwide
</p>

    </div>
    <div className='xl:w-[55%] w-[40%] cardBg flex justify-center items-center'>
        <img src={cardHome} alt="" />
    </div>
   </main>
    <main className='mt-20'>
    <Slider/>
    </main>


    </div>

  <main className='pt-32'>
    <Section2/>
  </main>

    <main className='w-full flex justify-center pb-32'>
       <div className='w-[90%] flex widthCard flex-col gap-20 items-center'>
        <h2 className='text-5xl font-semibold'>PAY, SEND, TRANSFER with <span className='gradientTextHome'>Metax</span>Pay</h2>
       <div className='w-[50%] cardSec3'>
       <Swiper/>
       </div>
       </div>
    </main>

<main className='w-[100%]'>
    <Section3/>
    <Section4/>
</main>

    </section>
  )
}

export default Cards;
