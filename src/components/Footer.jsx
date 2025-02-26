import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import "../styles/Home.css"
import logo from '../assets/newFinal.png';
import glo from '../assets/footerLogo.png'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section>
      <div className='h-[700px] w-[95%] rounded-full absolute shadow-[#15326C] shadow-2xl rotate-180' style={{backgroundImage:"radial-gradient(#15326C 30%,#040B1B )"}}>

</div>

      <div className='w-full flex justify-center relative top-0 bg-card' style={{borderRadius:"70px 70px 0 0"}}>
      
      <footer className='xl:w-[85%] width md:w-[90%]  w-[95%] pt-24'>
{/* 1st section starts */}
        <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-center md:justify-between items-center bg-[#131B2C] border-[1px] border-[#29354D] w-full rounded-2xl p-5'>
<div className='flex md:flex-row flex-col gap-5 items-center md:items-start '>
<div className='bg-card p-5 text-4xl rounded-2xl border-[1px] border-border'><FaTelegramPlane /></div>
<div className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start'>
  <h3 className='text-xl font-medium'>Join our awesome community</h3>
<p className='font-light text-center md:text-start text-[grey] md:text-[13px] lg:text-[16px] md:w-[80%] lg:w-[90%] xl:w-full'>Stay updated with the latest news, events, and product features of Metax Digital!</p>
</div>
</div>
<div>
<button className='lg:w-[180px] w-[140px] py-3 rounded-full text-[14px] lg:text-[16px] bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
</div>
        </div>
{/* 2nd section starts here */}
<section className='flex lg:flex-row flex-col lg:gap-14 xl:gap-0 gap-10 py-24'>
{/* 1st mainDiv */}
<div className='lg:w-[40%] w-full flex justify-center flex-col items-center md:items-start'>
<img src={logo} alt="" className='w-44 object-contain'/>
<h3 className='text-xl font-medium py-5 text-center md:text-start'>The Future of Decentralized Banking</h3>
<p className='font-light text-[grey] pb-10 text-center md:text-start'>Bridging Web3 Innovation  with  ,<br />Traditional Finance</p>
<img src={glo} alt="" className='w-52 object-contain'/>
</div>

{/* 2nd mainDiv */}

<div className='lg:w-[50%] w-full md:flex-row flex-col items-center md:items-start flex gap-10 md:gap-0 md:justify-between'>


{/* 2nd div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-[15px]'>Company info</h6>
  
<ul className='text-[silver] gap-4 flex flex-col items-center md:items-start text-sm md:text-[16px]'>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/'>Homepage</Link></li>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/blog'>Our Blog</Link></li>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/platform'>Platform</Link></li>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/contact'>Contact us</Link></li>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/platform'>API Docs</Link></li>

</ul>
</div>
{/* 3rd div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-center md:text-start text-[15px]'>Use cases</h6>
  
<ul className='text-[silver] gap-4 flex flex-col items-center md:items-start text-sm md:text-[16px]'>
  <li className='cursor-pointer hover:text-[grey]'><Link to='/ultra-high-net-worth-individual'>U/HNWI</Link></li>
  <li className='cursor-pointer hover:text-[grey]'>
<Link to='/daos-and-organizations'>DAOs & Organizations</Link></li>
  <li className='cursor-pointer hover:text-[grey]'>

<Link to='/institutional'>Institutional</Link></li>
  <li className='cursor-pointer hover:text-[grey]'>

<Link to='/real-estate'>Real Estate</Link></li>
  <li className='cursor-pointer hover:text-[grey]'>

<Link to='/platform'>Platforms</Link></li>

</ul>
</div>
{/* 4rth div */}
<div className='flex flex-col gap-7'>
  <h6 className='font-medium text-[15px]'>Legal Information</h6>
  
<ul className='text-[silver] gap-4 flex flex-col items-center md:items-start text-sm md:text-[16px]'>
  <li className='cursor-pointer hover:text-[grey]'>
<Link to='/cookies'>Cookies</Link></li>
  <li className='cursor-pointer hover:text-[grey]'>
<Link to='/privacy-policy'>Privacy Policy</Link>

</li>
  <li className='cursor-pointer hover:text-[grey]'>
    <Link to='/terms-of-use'>Terms of Use</Link>
  </li>
</ul>
</div>


</div>


</section>

{/* 3rd section starts here */}

<section className='border-t-[1px] border-b-[1px] border-l-0 border-r-0 border-border w-full'>

  <div  className='w-full flex justify-between items-center py-10 flex-col gap-5 md:flex-row'>
    <h3 className='text-[grey] text-[13px] md:text-[16px]'>Copyright © Metax Digital AG</h3>
    <div className='flex gap-5'>
<div className='bg-[#131B2C] text-white p-1 text-xl rounded-md border-[1px] border-border'>
<a href="https://www.facebook.com/MetaXPayments" target='_blank'><FaFacebookF /></a></div>
<div className='bg-[#131B2C] p-1 text-white text-xl rounded-md border-[1px] border-border'>
<a href="https://www.instagram.com/metaxpayments/" target='_blank'><RiInstagramFill /></a></div>
<div className='bg-[#131B2C] p-1 text-white text-xl rounded-md border-[1px] border-border'>
<a href="https://x.com/@MetaXPayments?mx=2" target='_blank'><FaXTwitter /></a></div>
<div className='bg-[#131B2C] p-1 text-white text-xl rounded-md border-[1px] border-border'>
<a href="https://www.linkedin.com/company/metaxpayments" target='_blank'><FaLinkedinIn /></a></div>
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
