import React from 'react'
import "../styles/Home.css"
import "../styles/UltraHigh.css"
import "../styles/Institutional.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import section2 from '../assets/instSec1.svg'
import section3 from '../assets/instSec2.png'
import section4 from '../assets/instSection3.svg'
import section5 from '../assets/instSec4.svg'
import first from '../assets/first.svg';
import ins from "../assets/image2.png"
import second from '../assets/second.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Institutional = () => {
  return (
  <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#060F26 30%,#010102 )"}}>
        <main className='md:w-[90%] xl:w-[90%] w-[95%] widthInstitutional z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col'>
          <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-32'>
   <div className='flex flex-col backHero  items-center  gap-10 pt-24 md:pt-2 lg:pt-10'>
              <h1 className=' lg:text-[60px] xl:text-7xl md:text-[55px] text-[41px]  w-[75%] md:w-full text-center font-medium leading-14 xl:w-[55%] lg:leading-20'>Charting <span className='gradientText'>New Investment Frontiers</span> in Crypto
              </h1>
              <p className='text-center font-light text-[16px] w-[85%] md:w-full lg:w-[80%] xl:w-[44%] xl:leading-7 lg:leading-8 md:leading-7 leading-7 '>Redefine the landscape of challenges and opportunities in the dynamic Web3 payment world with Metax Digital!</p>
              <button className='w-[350px] lg:w-[220px] py-4 rounded-full bg-btnBg font-medium hover:bg-hoverBg cursor-pointer'>Join now</button>
              <div className=' animate-ping pt-8'>
              <IoIosArrowDown className='text-[13px]'/>
              <IoIosArrowDown className='text-[13px]'/>
          </div>
          </div>
         
  
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
  <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-52 xl:pt-72'>
  
  <div className='lg:w-[48%] w-full md:w-full text-center lg:text-start font-medium'>
  <span className='gradientText text-2xl font-medium  leading-18 '>Choose your investments</span> 
          <h2 className='lg:text-[50px] md:text-5xl text-[47px] xl:w-[80%] xl:text-[60px] xl:leading-20 font-medium lg:leading-16 md:leading-18 leading-16'>
          Crypto Custody Solutions
  
          </h2>
  
  <p className='text-[silver] pt-5 xl:w-[87%] font-light  lg:w-[90%] leading-7  xl:leading-7'>Dive into the crypto universe with reliable custody options tailored to institutional prerequisites or your unique use case</p>
  <p className='text-[silver] pt-5 xl:w-[87%] font-light xl:leading-7  lg:w-[85%] leading-7'>Metax Digital elevates your institutional strategy with the tools and support needed to unlock the full potential of your crypto investments.</p>
  </div>
  
  
  <div className='lg:w-[48%] flex  w-full md:justify-center '>
  <img src={section2} alt="" />
  </div>
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
               <section className='flex flex-col gap-20 lg:flex-row xl:gap-32 justify-between items-center w-full py-20 pt-20'>
  
               <div className='lg:w-[48%]  w-full'>
  <img src={ins} alt="" />
  </div>
  
  <div className='lg:w-[48%] flex flex-col lg:items-start  lg:text-start w-full md:w-full text-center font-medium'>
    <div>
    <div>
      <span className='gradientText text-2xl font-medium  leading-18'>Diversify your portfolio</span></div> 
          <h2 className='lg:text-[50px] md:text-5xl text-[47px] font-medium md:leading-18 leading-14'>
          Investment <br className='hidden lg:block '/>Opportunities
  
          </h2>
  
          <p className='text-[silver] pt-5 xl:w-[87%] font-light leading-7 lg:w-[90%] xl:leading-7'>Discover the vast potential of crypto investments through Metax Digital. Whether you are interested in established crypto enterprises or exploring the decentralized possibilities of DAOs.</p>
  <p className='text-[silver] pt-5 xl:w-[87%] font-light leading-7 lg:w-[90%] xl:leading-7'>Metax Digital equips you with the knowledge and access needed to make informed and strategic investments.

</p>
  
    </div>
  </div>
  
  
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
          {/* ......................... Enhanced Functionality    section   starts ................. */}
          <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>
  
  <div className='lg:w-[48%] xl:w-[40%] w-full md:w-full text-center lg:text-start font-medium'>
  <span className='gradientText text-2xl font-medium  leading-18'>Ask for our help</span> 
          <h2 className='lg:text-[50px] md:text-5xl text-[47px] font-medium md:leading-18 leading-14'>
          24/7 Support and Assistance
          </h2>
  
  <p className='text-[silver] pt-5 md:leading-7 xl:w-[87%] font-light leading-7'>Have the guidance you need precisely when you need it. If you have inquiries, require technical assistance, or seek real-time market insights, our dedicated support team is ready to provide unwavering assistance and committed to sharing in-depth knowledge sessions, ensuring you are well-equipped to navigate the complexities of the crypto landscape.
  </p>
  </div>
  
  
  <div className='lg:w-[48%] flex lg:justify-end xl:justify-center w-full md:justify-center'>
  <img src={section4} alt="" />
  </div>
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
  
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
               <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>
  
               <div className='lg:w-[48%] flex justify-center w-full'>
  <img src={section5} alt="" />
  </div>
  
  <div className='xl:w-[45%] lg:w-[50%] flex flex-col lg:items-end w-full md:w-full text-center lg:text-start font-medium'>
    <div>
    <div>
      <span className='gradientText text-2xl font-medium  leading-18'>Ensure Your safety</span></div> 
          <h2 className='lg:text-[50px] md:text-5xl text-[47px] font-medium md:leading-18 leading-14'>
          Privacy and Security
  
  
          </h2>
  
  
          <p className='text-[silver] pt-10 lg:w-[95%] xl:w-[83%] font-light md:leading-7  '>Metax Digital is focused on ensuring all security measures are in place to safeguard your financial well-being. In addition to its self-custodial framework, the platform allows for secure wallet integration, including SAFE and Metamask, designed to safeguard private keys and protect against unauthorized access.</p>
  <p className='text-[silver] pt-5 lg:w-[95%]   xl:w-[83%] font-light md:leading-7 '>We are also committed to rigorous regulatory standards, encompassing tax implications, anti-money laundering (AML), know-your-customer (KYC), and know-your-business (KYB) regulations.

</p>
    </div>
  </div>
  
  
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}

{/* now another starts */}
<main className='py-20'>
<section className='flex flex-col lg:flex-row px-5 py-20 gap-10 md:p-10  bg-[#0C101A] w-full rounded-t-4xl lg:p-10 xl:p-0 xl:py-2 border-border border-[1px] justify-between xl:relative mb-5'>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 lg:w-full justify-center text-center lg:text-start'>
        <h2 className='xl:text-5xl md:text-[45px] text-[37px] font-medium'>Revolutionize Your Institutional Strategy</h2>
        <p className='font-light pt-5 md:pt-0 leading-7'>
        Metax Digital offers cutting-edge crypto solutions, ensuring the safety and integrity of your digital investments.
        </p>
        

</div>
<img src={first} alt="" className='lg:w-full md:w-[50%] w-[38%] object-contain hidden xl:block' />
<div className='flex justify-center items-center'>
  
<button className='bg-btnBg hover:bg-hoverBg md:py-3 lg:w-[220px] h-fit md:w-[150px] md:px-0 px-2 py-4 rounded-full text-sm md:text-lg md:font-medium xl:absolute xl:top-32 xl:right-14 w-[330px] '>Book call</button>
</div>
         
</section>
<section className=' flex flex-col lg:flex-row justify-center xl:p-0 xl:px-0  md:gap-10 md:p-10 py-20 items-center w-full rounded-b-4xl border-border border-[1px] lg:p-10 lg:pr-10 lg:px-5  xl:relative' style={{backgroundImage:"linear-gradient(to top,#2B5ABC 10%,#161E3A   )"}}>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 justify-center items-center lg:items-start md:w-full lg:pl-16 xl:pl-10 lg:pb-0  pb-10'>
        <h2 className='xl:text-5xl md:text-[45px] text-[43px] text-center lg:text-start font-medium'>Have any questions?</h2>
        <p className='font-light text-center lg:text-start pt-5 md:pt-0 leading-7'>
        Feel free to reach out to us anytime. We are here to help you!
        </p>
        

</div>
<img src={second} alt="" className='lg:w-full w-[50%] hidden xl:block'/>
<div className='flex justify-between items-center'>
  
<Link to='/contact' className='bg-white text-btnBg hover:text-white hover:bg-hoverBg md:py-3 lg:w-[220px] h-fit md:w-[150px] md:px-0 px-2 py-4 rounded-full text-sm md:text-lg md:font-medium xl:absolute xl:top-32 flex justify-center items-center xl:right-14 w-[330px]'>Contact us</Link>
         
</div>
</section>
</main>
{/* now another endss */}

          {/* ......................... Enhanced Functionality    section   starts ..............
  
  
  {/* ........Create your (Ultra) High Net-Worth account now ................... */}
  <section className='py-20 w-full'>
  <div className='flex justify-center'>
  <h1 className='xl:text-[55px] lg:text-[48px]  md:text-5xl text-[37px] text-center font-medium md:leading-18 lg:leading-16 xl:leading-20 xl:w-[70%] leading-12'>Redefine your institutional crypto engagement by charting your course with Metax Digital
  </h1>
  </div>
  <p className='opacity-[0.9] font-light text-center tracking-wide pt-5 lg:pt-10 leading-7 '>Join our solution today to embark on a transformative journey into crypto</p>
<div className='w-full flex justify-center pt-16 xl:pt-11'>
    
  <button className='bg-btnBg hover:bg-hoverBg  md:py-4 md:w-[280px] md:rounded-full lg:w-[300px] md:px-0 w-[330px] py-4  rounded-full lg:rounded-full  font-light xl:w-[300px]'>Join Our Solution Today</button>
</div>


  </section>
  {/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}
  
  
  
  
          </section>
  
        </main>
        
  
      </div>
      )
}

export default Institutional
