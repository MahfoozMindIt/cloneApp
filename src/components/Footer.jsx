import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import logo from '../assets/logoFinal.png';
import glo from '../assets/footerLogo.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <section>
      <div className='h-[700px] w-[95%] rounded-full absolute shadow-[#15326C] shadow-2xl rotate-180' style={{backgroundImage:"radial-gradient(#15326C 30%,#040B1B )"}}>

</div>

      <div className='w-full h-[900px] flex justify-center relative top-0 bg-card' style={{borderRadius:"70px 70px 0 0"}}>
      
      <footer className='xl:w-[85%] md:w-[90%]  w-[95%] pt-24'>
{/* 1st section starts */}
        <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-center md:justify-between items-center bg-[#131B2C] border-[1px] border-[#29354D] w-full rounded-2xl p-5'>
<div className='flex md:flex-row flex-col gap-5 items-center md:items-start '>
<div className='bg-card p-5 text-4xl rounded-2xl border-[1px] border-border'><FaTelegramPlane /></div>
<div className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start'>
  <h3 className='text-xl font-medium'>Join our awesome community</h3>
<p className='font-light text-center md:text-start text-[grey] md:text-[13px] lg:text-[16px] md:w-[80%] lg:w-[90%] xl:w-full'>Stay updated with the latest news, events, and product features of Skyline Digital!</p>
</div>
</div>
<div>
<button className='lg:w-[180px] w-[140px] py-3 rounded-full text-[14px] lg:text-[16px] bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
</div>
        </div>
{/* 2nd section starts here */}
<section className='flex lg:flex-row flex-col lg:gap-14 xl:gap-0 gap-10 py-24'>
{/* 1st mainDiv */}
<div className='lg:w-[40%] w-full'>
<img src={logo} alt="" className='w-44 object-contain'/>
<h3 className='text-xl font-medium py-5'>The Future of Decentralized Banking</h3>
<p className='font-light text-[grey] pb-10'>Bridging Web3 Innovation  with  ,<br />Traditional Finance</p>
<img src={glo} alt="" className='w-52 object-contain'/>
</div>

{/* 2nd mainDiv */}

<div className='lg:w-[50%] w-full flex gap-14 md:gap-0 md:justify-between'>


{/* 2nd div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-[15px]'>Company info</h6>
  
<ul className='text-[silver] gap-4 flex flex-col'>
  <li className='cursor-pointer hover:text-[grey]'>Homepage</li>
  <li className='cursor-pointer hover:text-[grey]'>Our Blog</li>
  <li className='cursor-pointer hover:text-[grey]'>Platform</li>
  <li className='cursor-pointer hover:text-[grey]'>Contact us</li>
  <li className='cursor-pointer hover:text-[grey]'>API Docs</li>

</ul>
</div>
{/* 3rd div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-[15px]'>Use cases</h6>
  
<ul className='text-[silver] gap-4 flex flex-col '>
  <li className='cursor-pointer hover:text-[grey]'>U/HNWI</li>
  <li className='cursor-pointer hover:text-[grey]'>
DAOs & Organizations</li>
  <li className='cursor-pointer hover:text-[grey]'>

Institutional</li>
  <li className='cursor-pointer hover:text-[grey]'>

Real Estate</li>
  <li className='cursor-pointer hover:text-[grey]'>

Platforms</li>

</ul>
</div>
{/* 4rth div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-[15px]'>Legal Information</h6>
  
<ul className='text-[silver] gap-4 flex flex-col '>
  <li className='cursor-pointer hover:text-[grey]'>
Risk Disclosure</li>
  <li className='cursor-pointer hover:text-[grey]'>

Privacy Policy
</li>
  <li className='cursor-pointer hover:text-[grey]'>
  Terms of Use</li>
</ul>
</div>


</div>


</section>

{/* 3rd section starts here */}

<section className='border-t-[1px] border-b-[1px] border-l-0 border-r-0 border-border w-full'>

  <div  className='w-full flex justify-between items-center py-10'>
    <h3 className='text-[grey] text-[13px] md:text-[16px]'>Copyright © Metax Digital AG</h3>
    <div className='flex gap-5'>
  
<div className='bg-[#131B2C] p-1 text-xl rounded-md border-[1px] border-border'><FaFacebookF /></div>
<div className='bg-[#131B2C] p-1 text-xl rounded-md border-[1px] border-border'><RiInstagramFill /></div>
<div className='bg-[#131B2C] p-1 text-xl rounded-md border-[1px] border-border'><FaXTwitter /></div>
<div className='bg-[#131B2C] p-1 text-xl rounded-md border-[1px] border-border'><FaLinkedinIn /></div>
</div>
  </div>

</section>
{/* 4rth section starts here */}
<section className='py-10'>
  <span className='text-[12px] text-[grey]'>Metax Digital is a regulated business operating in Switzerland.</span> <br />
  <span className='text-[12px] text-[grey]'>CH - Metax Digital AG is a VASP and financial intermediary registered with VQF, an <span className='text-btnBg'>SRO</span> supervised by <span className='text-btnBg'>FINMA</span>.</span>
</section>
      </footer>
      
    </div>
    </section>
  )
}

export default Footer
