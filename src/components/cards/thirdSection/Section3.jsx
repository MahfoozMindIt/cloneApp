import React from 'react'
import "./Section3.css"
import r1 from '../../../assets/aliexpress.svg'
import r2 from '../../../assets/amazon.svg'
import r3 from '../../../assets/eBay.svg'
import { HiShoppingBag } from "react-icons/hi2";
import { MdFlightTakeoff } from "react-icons/md";
import { FaBellConcierge } from "react-icons/fa6";
import { BiSolidGame } from "react-icons/bi";
import { IoChatbubblesSharp } from "react-icons/io5";
const Section3 = () => {
  return (
    <div className='flex text-white  h-screen w-full flex-col items-center banner3'>
   <div className='widthCard3 flex justify-center items-center flex-col'>
   <h1 className='md:text-[54px] text-4xl text-center md:leading-14 font-semibold'>
        MAKE PAYMENT WITH CRYPTO ANYTIME, ANYWHERE
        </h1>
      <h3 className='md:text-2xl  text-center pt-10'>
Accepted by 130M+ merchants globally | Apple Pay/Google Pay compatibility | No advance fiat conversion needed</h3>

<section className='flex flex-col gap-3 mt-14'>
<main  className='bg-[rgba(243,243,243,0.7)] flex items-center justify-between md:w-[450px] w-[400px] h-[55px] px-10 rounded-2xl'>
<div className=' flex items-center gap-5 text-black'>
    <img src={r1} alt="" />
    <p className='font-bold opacity-[0.9] text-md'>
        Aliexpress
    </p>
</div>
<p className='opacity-[0.5] font-bold text-black'>- $550.00 USD</p>
</main>

<main  className='bg-[rgba(243,243,243,0.7)] flex items-center justify-between md:w-[450px] w-[400px] h-[55px] px-10 rounded-2xl'>
<div className=' flex items-center gap-5 text-black'>
<img src={r2} alt="" />
    <p className='font-bold opacity-[0.9] text-md'>
        Amazon
    </p>
</div>
<p className='opacity-[0.5] font-bold text-black'>- $550.00 USD</p>
</main>

<main  className='bg-[rgba(243,243,243,0.7)] flex items-center justify-between md:w-[450px] w-[400px] h-[55px] px-10 rounded-2xl'>
<div className=' flex items-center gap-5 text-black'>
<img src={r3} alt="" />
    <p className='font-bold opacity-[0.9] text-md'>
        eBay
    </p>
</div>

<p className='opacity-[0.5] font-bold text-black'>- $550.00 USD</p>
</main>
</section>

<section className='pt-10 flex flex-wrap  justify-center gap-10 xl:gap-32 items-center mt-32'>
<div className='flex items-center gap-3 text-[18px] px-7 py-2 rounded-full bg-[rgba(243,243,243,0.3)] border-white border-[1px]'>
    <HiShoppingBag className='text-2xl'/>
    <p className='font-medium'>Online Shopping</p>
</div>
<div className='flex items-center gap-3 text-[18px] hover:px-7 hover:py-2 hover:rounded-full hover:bg-[rgba(243,243,243,0.3)] hover:border-white hover:border-[1px] transition-all duration-300 cursor-pointer'>
    <FaBellConcierge className='text-2xl'/>
    <p className='font-medium'>F&B</p>
</div>
<div className='flex items-center gap-3 text-[18px] hover:px-7 hover:py-2 hover:rounded-full hover:bg-[rgba(243,243,243,0.3)] hover:border-white hover:border-[1px] transition-all duration-300 cursor-pointer'>
    <MdFlightTakeoff className='text-2xl'/>
    <p className='font-medium'>Travel</p>
</div>
<div className='flex items-center gap-3 text-[18px] hover:px-7 hover:py-2 hover:rounded-full hover:bg-[rgba(243,243,243,0.3)] hover:border-white hover:border-[1px] transition-all duration-300 cursor-pointer'>
    <BiSolidGame className='text-2xl'/>
    <p className='font-medium'>Gaming & Tech</p>
</div>
<div className='flex items-center gap-3 text-[18px] hover:px-7 hover:py-2 hover:rounded-full hover:bg-[rgba(243,243,243,0.3)] hover:border-white hover:border-[1px] transition-all duration-300 cursor-pointer'>
    <IoChatbubblesSharp className='text-2xl'/>
    <p className='font-medium'>Social</p>
</div>
</section>
   </div>

    </div>
  )
}

export default Section3
