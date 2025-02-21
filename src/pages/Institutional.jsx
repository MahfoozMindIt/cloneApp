import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import section2 from '../assets/instSec1.svg'
import section3 from '../assets/instSec2.png'
import section4 from '../assets/instSection3.svg'
import section5 from '../assets/instSec4.svg'
import first from '../assets/first.svg';
import ins from "../assets/ins.png"
import second from '../assets/second.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Institutional = () => {
  return (
  <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#060F26 30%,#010102 )"}}>
        <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
          {/* banner section..... */}
  <img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
          <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-36'>
  
          <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10'>
              <h1 className='xl:text-7xl md:text-5xl text-4xl text-center font-medium xl:leading-24'>Charting 
              <span className='text-btnBg'> New In</span><span className='text-v3  '>vestment</span> <br className='hidden md:block'/> <span className='text-v4 '>Frontiers</span>   in Crypto </h1>
              <p className='text-center md:text-[17px] text-[15px]'>Redefine the landscape of challenges and opportunities in the dynamic Web3 payment<br className='hidden lg:block'/> world with Metax Digital!</p>
              <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
          </div>
          <div className='xl:pt-16 pt-10 text-md animate-ping '>
              <IoIosArrowDown />
              <IoIosArrowDown />
          </div>
  
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
  <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-52 xl:pt-72'>
  
  <div className='lg:w-[48%] w-full'>
  <span className='text-btnBg text-md md:text-2xl leading-18'>Choose yo</span><span className='text-v3 text-md md:text-2xl '>ur inve</span><span className='text-v4 text-md md:text-2xl'>stments</span> 
          <h2 className='lg:text-7xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
          Crypto Custody <br className='hidden lg:block '/> Solutions
  
          </h2>
  
  <p className='text-[silver] pt-10 lg:w-[80%]'>Dive into the crypto universe with reliable custody options tailored to institutional prerequisites or your unique use case</p>
  <p className='text-[silver] pt-5 lg:w-[80%]'>Metax Digital elevates your institutional strategy with the tools and support needed to unlock the full potential of your crypto investments.</p>
  </div>
  
  
  <div className='lg:w-[48%] flex lg:justify-end w-full'>
  <img src={section2} alt="" />
  </div>
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
               <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>
  
               <div className='lg:w-[48%]  w-full'>
  <img src={ins} alt="" />
  </div>
  
  <div className='lg:w-[48%] flex flex-col lg:items-end w-full'>
    <div>
    <div>
      <span className='text-btnBg text-md md:text-2xl leading-18'>Diversif</span><span className='text-v3 text-md md:text-2xl '>y you</span><span className='text-v4 text-md md:text-2xl'>r portfolio</span></div> 
          <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
          Investment <br className='hidden lg:block '/>Opportunities
  
          </h2>
  
          <p className='text-[silver] pt-10 lg:w-[80%]'>Discover the vast potential of crypto investments through Metax Digital. Whether you are interested in established crypto enterprises or exploring the decentralized possibilities of DAOs.</p>
  <p className='text-[silver] pt-5 lg:w-[80%]'>Metax Digital equips you with the knowledge and access needed to make informed and strategic investments.

</p>
  
    </div>
  </div>
  
  
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
          {/* ......................... Enhanced Functionality    section   starts ................. */}
          <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>
  
  <div className='lg:w-[48%] w-full'>
  <span className='text-btnBg text-md md:text-2xl leading-18'>Ask f</span><span className='text-v3 text-md md:text-2xl '>or our h</span><span className='text-v4 text-md md:text-2xl'>elp</span> 
          <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
          24/7 Support and <br className='hidden lg:block '/> Assistance
          </h2>
  
  <p className='text-[silver] pt-5'>Have the guidance you need precisely when you need it. If you have inquiries, require technical assistance, or seek real-time market insights, our dedicated support team is ready to provide unwavering assistance and committed to sharing in-depth knowledge sessions, ensuring you are well-equipped to navigate the complexities of the crypto landscape.
  </p>
  </div>
  
  
  <div className='lg:w-[48%] flex lg:justify-end w-full'>
  <img src={section4} alt="" />
  </div>
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}
  
  
               {/* ......................... Enhanced Functionality    section   starts ................. */}
               <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>
  
               <div className='lg:w-[48%]  w-full'>
  <img src={section5} alt="" />
  </div>
  
  <div className='lg:w-[48%] flex flex-col lg:items-end w-full'>
    <div>
    <div>
      <span className='text-btnBg text-md md:text-2xl leading-18'>Ensure y</span><span className='text-v3 text-md md:text-2xl '>our s</span><span className='text-v4 text-md md:text-2xl'>afety</span></div> 
          <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
          Privacy and<br className='hidden lg:block '/>Security
  
  
          </h2>
  
  
          <p className='text-[silver] pt-10 lg:w-[80%]'>Metax Digital is focused on ensuring all security measures are in place to safeguard your financial well-being. In addition to its self-custodial framework, the platform allows for secure wallet integration, including SAFE and Metamask, designed to safeguard private keys and protect against unauthorized access.</p>
  <p className='text-[silver] pt-5 lg:w-[80%]'>We are also committed to rigorous regulatory standards, encompassing tax implications, anti-money laundering (AML), know-your-customer (KYC), and know-your-business (KYB) regulations.

</p>
    </div>
  </div>
  
  
  
  </section>
  {/* ......................... Enhanced Functionality    section   ends ................. */}

{/* now another starts */}
<main className='py-20'>
<section className=' md:flex hidden bg-[#0C101A] w-full rounded-t-4xl py-2 border-border border-[1px] justify-between relative mb-5'>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 lg:w-full justify-center'>
        <h2 className='xl:text-5xl lg:text-2xl md:text-xl font font-semibold'>Revolutionize Your Institutional Strategy</h2>
        <p className='md:text-sm text-[13px] lg:text-normal'>
        Metax Digital offers cutting-edge crypto solutions, ensuring the safety and integrity of your digital investments.
        </p>
        

</div>
<img src={first} alt="" className='lg:w-full md:w-[50%] w-[38%] object-contain' />
<button className='bg-btnBg hover:bg-hoverBg md:py-3 lg:w-[220px] md:w-[150px] md:px-0 px-2 py-1 rounded lg:rounded-full text-sm md:text-lg md:font-medium absolute lg:top-26 md:top-10 top-5 right-5 md:right-14'>Book call</button>
         
</section>
<section className=' md:flex hidden w-full rounded-b-4xl border-border border-[1px] justify-between relative' style={{backgroundImage:"linear-gradient(to top,#2B5ABC 10%,#161E3A   )"}}>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 lg:w-full w-[50%] justify-center'>
        <h2 className='xl:text-5xl lg:text-2xl md:text-xl font font-semibold'>Have any questions?</h2>
        <p className='md:text-sm text-[13px] lg:text-normal'>
        Feel free to reach out to us anytime. We are here to help you!
        </p>
        

</div>
<img src={second} alt="" className='lg:w-full w-[50%]'/>
<Link to='/contact' className='bg-white text-btnBg hover:text-white hover:bg-hoverBg md:py-3 lg:w-[220px] md:w-[150px] md:px-0 px-2 py-1 lg:rounded-full rounded flex justify-center items-center md:text-lg text-sm md:font-medium absolute lg:top-26 md:top-10 top-5 right-5 md:right-14'>Contact us</Link>
         
</section>
</main>
{/* now another endss */}

          {/* ......................... Enhanced Functionality    section   starts ..............
  
  
  {/* ........Create your (Ultra) High Net-Worth account now ................... */}
  <section className='py-20 w-full'>
  <h1 className='lg:text-6xl md:text-5xl text-4xl text-center font-medium md:leading-18 leading-10'>Redefine your institutional crypto<br className='hidden md:block'/> engagement by charting your course <br className='hidden md:block'/>with Metax Digital
  </h1>
  <p className='text-[grey] text-center lg:text-lg md:text-[16px] pt-5 lg:pt-10'>Join our solution today to embark on a transformative journey into crypto</p>
<div className='w-full flex justify-center pt-16'>
    
  <button className='bg-btnBg hover:bg-hoverBg md:py-3 lg:w-[220px] md:w-[150px] md:px-0 px-2 py-1 rounded lg:rounded-full text-sm md:text-lg md:font-medium '>Book call</button>
</div>


  </section>
  {/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}
  
  
  
  
          </section>
  
        </main>
        
  
      </div>
      )
}

export default Institutional
