import React from 'react'
import './section4.css'
import g1 from '../../../assets/g1.png'
import g2 from '../../../assets/g2.png'
import g3 from '../../../assets/g3.png'
import g4 from '../../../assets/g4.png'
import { IoIosSend } from 'react-icons/io'

const Section4 = () => {
  return (
      <div className='  bgsec4  text-white flex justify-center items-center'>
   <div className='flex text-white w-[85%] h-screen flex-col items-center justify-center'>
           <h1 className='text-[54px] text-center leading-14 font-semibold'>
           SHARE HAPPY MOMENTS
           </h1>
         <h3 className='text-2xl text-center pt-10'>Split the bill with friends or send gifts in crypto with 0 transfer fees</h3>
   
   <main className='w-[60%] pt-20 relative'>
   <div className='w-full flex flex-col gap-5'>
<img src={g1} alt="" className=' h-[378px] w-full name object-cover rounded-3xl'/>
<div className=' w-full  h-[378px] gap-5'>
  <div className='flex w-full gap-5'>
    
<img src={g2} alt="" className='w-[50%] object-cover'/>
<img src={g3} alt="" className='w-[50%] object-cover'/>
  </div>
<img src={g4} alt="" className='col-span-2 w-full pt-5'/>
</div>
</div>

<div className='xl:w-[55%] w-[70%] text-black flex flex-col gap-3 absolute left-25 top-[780px] xl:left-50 xl:top-[900px]'>
    <div className='w-full h-[70px] bg-white flex justify-between p-5 rounded-3xl'>

     <div className='h-full flex-col justify-between'>
     <p className='pb-2'>Send</p>
     <div className='progress1'>

     </div>

     
     </div>
     <div className='flex flex-col justify-end items-end'>
      <p className='opacity-[0.6] text-sm'>Happy Valentines</p>
      <h2 className='font-medium'>- 214 USDT</h2>
     </div>

    </div>

    <div className='w-full h-[70px] bg-white flex justify-between p-5 rounded-3xl'>

<div className='h-full flex-col justify-between'>
<p className='pb-2'>Receive</p>
<div className='progress2'>

</div>


</div>
<div className='flex flex-col justify-end items-end'>
 <p className='opacity-[0.6] text-sm'>Dinner on Apr 20</p>
 <h2 className='font-medium'>+ 8.7 USDT</h2>
</div>

</div>


    <div className='w-full h-[50px] bgSec4Card flex items-center justify-center text-white font-medium rounded-3xl'>
<span>Why not surprise your friends with crypto? </span>


</div>


<main className='flex justify-center'>
<div className='bgSec4Card h-fit w-fit p-3 rounded-full'>
  <IoIosSend className='text-white text-4xl' />
</div>
</main>


   </div>

   </main>

  
       </div>
    </div>
  )
}

export default Section4
