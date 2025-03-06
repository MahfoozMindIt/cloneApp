import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import { Fieldset } from 'primereact/fieldset';
import { Link } from 'react-router-dom'
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import animation from "../assets/animation1.mp4"
import { MdAccountTree, MdOutlineCompareArrows, MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosCard, IoMdCheckmark } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa6';
import gateway1 from '../assets/gateway1.svg'
import gateway2 from '../assets/gateway2.svg'
import gateway3 from '../assets/gateway3.svg'
import section1 from '../assets/section1.svg'
import frame from '../assets/Frame.svg'
import line from '../assets/download1.svg';
import image from "../assets/Image.png"
import side from '../assets/side.svg';
import z1 from '../assets/z1.svg';
import z2 from '../assets/z2.svg';
import z3 from '../assets/z3.svg';
import z4 from '../assets/z4.svg';
import z5 from '../assets/z5.svg';
import z6 from '../assets/z6.svg';
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import Slider from '../components/slider/Slider';
import MetaData from '../components/Metadata';

const Home = () => {
        const legendTemplate = (
                <div className="bg-transparent px-2 ">
                    <span className="font-railway font-light text-xl">You Send</span>
                </div>
            );
            const legendTemplate2 = (
                <div className="bg-transparent px-2 ">
                    <span className="font-railway font-light text-xl">You Get</span>
                </div>
            );
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
        <MetaData metaData={'Metax Digital'}/>
      <main className='width  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute w-full xl:top-110 top-50 z-10' />
<section className='flex w-full items-center lg:flex-row flex-col justify-between gap-20 z-30 pt-10 md:pt-24 xl:pt-16'>
<div className='lg:w-[45%] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
        <h3 className='xl:text-[21px] text-[18px] font-medium gradientText3 pb-3'>USDT Business Accounts Simplified.</h3>
        <h1 className='xl:text-6xl text-4xl md:text-5xl text-center lg:text-start font-medium xl:leading-18 xl:w-[90%] pb-7  leading-12'>
        One Solution for All Your <span className='gradientTextHome '>Business</span> Needs.
        </h1>
        <p className='opacity-[0.8] font-light text-center lg:text-start leading-7 md:w-[70%] lg:w-fit pb-10'>
        A one-of-a-kind solution integrating fiat accounts, cryptocurrency trading, and international payments—all in a single account.
        </p>
        <button className=' w-[350px] lg:w-[220px] py-4 rounded-full bg-btnBg font-medium hover:bg-hoverBg cursor-pointer'>
                Contact us
        </button>
</div>
<div className='xl:w-[40%] lg:w-[50%] w-full md:w-[70%] md:h-[500px] h-[450px] calculator rounded-3xl p-7'>

        <div className='flex border-b-[1px] border-[#525151] mb-10'>
                <div className='w-[50%]  flex justify-center  flex-col items-center'>
                        <h3 className='md:text-[25px] text-[20px] '>Buy</h3>
                </div>
                <div className='text-4xl font-thin text-[#525151]'>
                        |
                </div>
                <div className='w-[50%] text-[25px]  flex justify-center flex-col items-center'>
                       <h3 className='gradientTextHome font-medium md:text-[25px] text-[20px]'>Sell</h3>
                       <div className='h-[2px] w-[90%] sell rounded-full'></div>
                </div>
        </div>

   <main className='flex mySec'>
   <section className='w-full'>
     <div className='flex flex-col gap-10'>
      <div className='flex h-[80px] custom-select'>
      <Fieldset legend={legendTemplate} className='border-[#525151] w-[75%] border-[1px] p-3 px-6 h-[80px]'>
                <input type="text" name='from_name'
             id="" className=' w-full text-xl outline-none font-roboto '/>
            </Fieldset>
            <select className='border-[#525151] border-l-0 w-[25%] select p-5 font-light text-xl outline-0 border-[1px] h-[66px] mt-[14px]'>
                <option value="" className='bg-black'>EUR</option>
                <option value="" className='text-black '>EUR Euro</option>
            </select>
      </div>
      <div className='flex h-[80px] custom-select'>
      <Fieldset legend={legendTemplate2} className='border-[#525151] w-[75%] border-[1px] p-3 px-6 h-[80px]'>
                <input type="text" name='from_name'
             id="" className=' w-full text-xl outline-none font-roboto '/>
            </Fieldset>
            <select className='border-[#525151] border-l-0 w-[25%]   select  p-5 font-light text-xl outline-0 border-[1px] h-[66px] mt-[14px]'>
                <option value="" className='text-black '>EUR</option>
                <option value="" className='text-black '>EUR Euro</option>
            </select>
      </div>
        </div>

      <div className='flex justify-center items-center pt-10'>
      <button className='w-full py-4 rounded-full bg-btnBg text-xl hover:bg-hoverBg cursor-pointer'>Sell</button>
    
      </div>




     </section>


     {/* <section>
     <div className='flex flex-col gap-10'>
      <div className='flex h-[80px]'>
      <Fieldset legend={legendTemplate} className='border-[#525151] w-[75%] border-[1px] p-3 px-6 h-[80px]'>
                <input type="text" name='from_name'
             id="" className=' w-full text-xl outline-none font-roboto '/>
            </Fieldset>
            <select className='border-[#525151] border-l-0 w-[25%] p-5 font-light text-xl outline-0 border-[1px] h-[67px] mt-[13px]'>
                <option value="" className='bg-black'>EUR</option>
                <option value="" className='text-black '>EUR Euro</option>
            </select>
      </div>
      <div className='flex h-[80px]'>
      <Fieldset legend={legendTemplate2} className='border-[#525151] w-[75%] border-[1px] p-3 px-6 h-[80px]'>
                <input type="text" name='from_name'
             id="" className=' w-full text-xl outline-none font-roboto '/>
            </Fieldset>
            <select className='border-[#525151] border-l-0 w-[25%]  p-5 font-light text-xl outline-0 border-[1px] h-[67px] mt-[13px]'>
                <option value="" className='text-black '>EUR</option>
                <option value="" className='text-black '>EUR Euro</option>
            </select>
      </div>
        </div>

      <div className='flex justify-center items-center pt-10'>
      <button className='w-full py-4 rounded-full bg-btnBg text-xl hover:bg-hoverBg cursor-pointer'>Sell</button>
    
      </div>
     </section> */}
   </main>

</div>
</section>
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-32'>
        <div className='w-fit items-center  gap-3 bg-[#0C193D] flex p-2 border-btnBg border-[1px] rounded-xl'>
            <p className='bg-btnBg w-14 py-1 font-semibold xl:text-[15px] md:text-[13px] text-[10px] flex items-center justify-center rounded-full '>New</p>
            <p className='xl:text-[15px] md:text-[13px] text-[10px]'><span className='font-semibold'>Cards</span> - Access Fiat liquidity without selling your assets. <Link to='/blog' className='text-v4'>Learn more</Link></p>
        </div>
        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='xl:text-7xl md:text-6xl text-4xl text-center font-medium'>
            What can <span className='gradientTextHome'>Metax offer you?</span>
            </h1>
            {/* <p className='text-center'>A Non-Custodial Solution Opening the Doors of TradFi for <br className='hidden md:block'/> Web3 Businesses and Founders.</p> */}
            <button className='w-[350px] lg:w-[220px] py-4 rounded-full bg-btnBg font-medium hover:bg-hoverBg cursor-pointer'>Join now</button>
        </div>
        
{/* cards section start .......... */}
<section className='  hidden xl:grid xl:grid-cols-3 gap-10 pt-5'>
        
        {/* flex 1 */}
        <section className='flex gap-10 flex-col cards'>
        <div className='p-7  card card rounded-2xl flex flex-col gap-5 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><AiOutlineGlobal className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     Crypto to Fiat Payments
     </h2>
     <p className='text-[#A2AAC7] font-thin text-sm leading-6'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             <div className='p-7  card   rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdAccountTree className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     Crypto Payments
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Process batched crypto payments hassle-free, perfect for payroll and more.</p>
     
             </div>
      
             <div className='p-7  card  rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><GiTwoCoins className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     xyz ?
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Providing web3 businesses and their founders access to specialized loan solutions and factoring</p>
     
             </div>
      
        
        
        </section>
     
        {/* flex 2 */}
        <section className='flex gap-10 mt-16  flex-col cards'>
        <div className='p-7  card  rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><BsPersonFill className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     Virtual Accounts
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Create named e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
             <div className='p-7 card  pb-10  rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlineCompareArrows className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     xyz ?
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      
             <div className='p-7 card  pb-10   rounded-2xl border-border border-[1px] flex flex-col gap-3' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><IoIosCard className='text-[25px] font-medium'/></div>
     <p className=' text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '><span className='gradientTextHome'>Coming soon</span></p>
                 </div>
     <h2 className='text-2xl font-medium'>
     Cards
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Physical or virtual debit cards in either EUR or GBP that interact flawlessly with your non-custodial wallets.</p>
     
             </div>
      
        
        
        </section>
     
        {/* flex-3   */}
        <section className='flex gap-10 flex-col cards'>
        <div className='p-7  card  rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><RiSecurePaymentLine className='text-[25px] font-medium'/></div>
     <h2 className='text-2xl font-medium'>
     Virtual Cards
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             <div className='p-7  card   rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-[25px] font-medium'/></div>
     <p className='text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '><span className='gradientTextHome'>Coming soon</span></p>
                 </div>
     <h2 className='text-2xl font-medium'>
     Payables & Invoice Me
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div> 
      
             <div className='p-7  card   rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlinePrivacyTip className='text-[25px] font-medium'/></div>
     <p className='text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '><span className='gradientTextHome'>Coming soon</span></p>
                 </div>
     <h2 className='text-2xl font-medium'>
     Compliant Privacy
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'> Banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
             </div> 
        
        </section>
     
     
             </section>
             {/* card section ends  now........... */}
{/* cards section 2 starts .......... */}
<section className=' grid xl:hidden md:grid-cols-2 grid-cols-1 gap-5 pt-20'>
        
        {/* flex 1 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><AiOutlineGlobal className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     Crypto to Fiat Payments
     </h2>
     <p className='text-[#A2AAC7] font-light text-sm leading-6'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdAccountTree className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     Crypto Payments
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Process batched crypto payments hassle-free, perfect for payroll and more.</p>
     
             </div>
      
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><GiTwoCoins className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     xyz ?
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Providing web3 businesses and their founders access to specialized loan solutions and factoring</p>
     
             </div>
      
        
        
        
     
        {/* flex 2 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><BsPersonFill className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     Virtual Accounts
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Create named e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlineCompareArrows className='text-3xl'/></div>
     <h2 className='text-2xl font-medium'>
     xyz ?
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><IoIosCard className='text-2xl'/></div>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '>Comin<span className='text-v4'>g soon</span></p>
                 </div>
     <h2 className='text-2xl font-medium'>
     Cards
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Physical or virtual debit cards in either EUR or GBP that interact flawlessly with your non-custodial wallets.</p>
     
             </div>
      
        
        
     
        {/* flex-3   */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><RiSecurePaymentLine className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     Tokenised Securities
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-2xl'/></div>
     <h2 className='text-2xl font-medium'>
     Payables & Invoice Me
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div>
      
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-5 border-[#1A2436] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlinePrivacyTip className='text-3xl'/></div>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '>Comin<span className='text-v4'>g soon</span></p>
                 </div>
     <h2 className='text-2xl font-medium'>
     Compliant Privacy
     </h2>
     <p className='opacity-[0.7] font-light text-sm leading-6'> Banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
             </div> 
        
     
     
             </section>
             {/* card section ends  now........... */}


             {/* ......................... Enhanced Functionality    section   starts ................. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between homeSec2 items-center w-full pt-20 md:mb-[80px]'>

<div className='lg:w-[48%] w-full md:w-[85%] flex-col  items-center justify-center lg:justify-start lg:items-start'>
        <h2 className='xl:text-6xl text-5xl text-center lg:text-start font-medium leading-18'>
                Enhanced <br className='hidden lg:block '/> Functionality
        </h2>
        <div className='flex gap-5 items-center flex-wrap md:flex-nowrap  pt-5 pb-5 w-full justify-center lg:justify-start'>
                <img src={gateway1} alt="" />
                <img src={gateway2} alt="" />
                <img src={gateway3} alt="" />
        </div>
<h3 className='text-4xl font-medium text-center lg:text-start pt-3 pb-5'>
<span className='gradientTextHome leading-18'>Easy integration</span> with <br className='hidden lg:block '/> different wallets
</h3>
<p className='font-light text-[#A6ACB8] lg:w-[75%]  text-center lg:text-start'>
Seamlessly integrate your existing SAFE wallet, MetaMask or  WalletConnect with Metax to unlock a world of effortless transactions.
</p>
</div>


<div className='lg:w-[48%] w-full'>
<div className='w-full md:h-[550px] lg:flex lg:items-center'>

<video 
  width="100%" 
  height="100%" 
   className='rounded-3xl'
  autoPlay 
  muted 
  loop
>
  <source src={animation} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}

{/* ........ A solution for different cases section starts ................... */}
<section className='py-20 flex flex-col items-center w-full'>
<h1 className='text-center md:text-5xl xl:text-6xl text-5xl font-medium leading-14'><span className='gradientTextHome'>Metax Digital</span> offers USDT Services</h1>
<p className='opacity-[0.7] font-light pt-10 text-[17px] leading-7 w-[70%] text-center'>Metax Digital offers USDT Services to multiple industries across the globe. Here are some examples of industries we support.</p>


<div className='grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 pt-20'>
<div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z1} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl pb-2'>Instant Transfers
</h3>
<p className='font-light opacity-[0.7] text-center'>
Immediate Payments Across Borders
</p>
                </main>
        </div>
        <div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z2} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl text-center pb-2'>Affordable FX Rates
</h3>
<p className='font-light opacity-[0.7] text-center'>Minimized Foreign Exchange Costs
</p>
                </main>
        </div>
        <div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z3} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl pb-2'>Widely Accepted
</h3>
<p className='font-light opacity-[0.7] text-center'>USDT is widely acceptable
</p>
                </main>
        </div>
        <div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z4} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl pb-2'>Statements
</h3>
<p className='font-light opacity-[0.7] text-center'>
Clear and Precise Monthly Reports
</p>
                </main>
        </div>
        <div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z5} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl pb-2'>Security
</h3>
<p className='font-light opacity-[0.7] text-center'>Premium Security Measures, Including 3D Secure
</p>
                </main>
        </div>
        <div className='rounded-2xl border-[1px] border-transparent hover:border-border transition-all duration-300'>
                <main className=' bg-[#131927] h-[100px] rounded-3xl rounded-b-none py-3 flex justify-center'>
<img src={z6} alt="" />
                </main>
                <main className='bg-[#0B101B] h-[150px] rounded-3xl rounded-t-none flex justify-center items-center flex-col p-5'>
<h3 className='text-xl pb-2'>Notifications
</h3>
<p className='font-light opacity-[0.7] text-center'>Instant Transaction Alerts
</p>
                </main>
        </div>
     
</div>

{/* <img src={image} alt="" className='py-20 h-[700px]'/> */}
</section>
{/* ........ A solution for different cases section ends ...................  */}

        </section>

      </main>
      
<img src={line} alt="" className='w-full z-30'/>
<div className='w-full flex justify-center width flex-col items-center relative'>
        <div  className= ' z-40 width w-[95%] md:w-[90%] absolute top-0  h-[61px]'></div>
<img src={BgImg} alt="" className='rotate-180  z-10 absolute -top-14'/>
<main className='md:w-[90%] xl:w-[85%] w-[95%]   absolute md:top-40 top-20 lg:top-10 z-30 '>
<h1 className='text-5xl font-medium text-center  z-30'>Level up with <span className='gradientTextHome'>Metax Digital</span></h1>
<div className='w-full flex justify-center'>
<p className='opacity-[0.7] font-light text-center levelSecPara pt-7 pb-14 w-[80%]'>A hassle-free solution that sends your transactions to banking partners, and connects you to the TradFi world and network liquidity providers.</p>
</div>
<div className='text-center'><button className='w-[240px] py-4 rounded-full bg-btnBg  hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>
<div className=' md:w-[90%]  w-[95%] width  h-96 mt-[500px] lg:mt-[400px] mb-[3400px] md:mb-[3300px] lg:mb-[1600px] xl:mb-[1900px]'>
{/*.......................... pricing section starts .......... */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20'>

<div className='lg:w-[46%] md:w-[80%] w-full'>
        <h2 className='xl:text-6xl text-5xl text-center lg:text-start font-medium leading-18'>
        Transaction Flat <br className='hidden lg:block '/> Fee Pricing
        </h2>

<p className='text-[grey] text-center lg:text-start py-10 xl:w-[75%]'>We believe in transparent pricing that puts you in control. With us, there are no onboarding fees or ongoing fees to worry about. You only pay for our services when you actually use them.
</p>
<div className='w-full  flex-col hidden lg:flex gap-5 pb-10'>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No onboarding fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No gas fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No ongoing fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>Only pay if and when you use our services</p>
</div>
{/* <div className='hidden lg:block'>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Polygon</span> - Minimum charge: USD 30</p>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Mainnet </span> - Minimum charge: USD 100</p>
</div> */}
</div>


<div className='lg:w-[53%] md:w-[80%] w-full'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='border-border border-[1px] xl:h-[480px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className=' text-8xl font-bold'><span className='gradientTextHome'>1%</span></h2>
<span className='text-[#2E313A] text-5xl'>*</span>
                </div>
                <h3 className='text-2xl font-medium pt-7'>Crypto to Fiat</h3>
                <p className='opacity-[0.6] font-light py-5 text-sm'>Convert cryptocurrency to fiat with our user-friendly platform, ensuring easy access the traditional financial system.</p>
                <p className='font-semibold pb-5 text-sm lg:pb-20'>
                ℹ️ From  1% fee  <span className='opacity-[0.6] font-light'> for crypto-to-fiat transactions</span>
                </p>
        </div>
        <div className='border-border border-[1px] xl:h-[480px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className='text-8xl font-bold'><span className='gradientTextHome'>0%</span></h2>
                </div>
                <h3 className='text-2xl font-medium pt-7'>Crypto to Crypto</h3>
                <p className='opacity-[0.6] font-light py-5 text-sm'>Streamline batch cryptocurrency transactions using our platform. Manage multiple payments with ease, precision, and reliability.</p>
                <p className='font-semibold pb-5 xl:pb-20'>
                ℹ️ From 0% fee <span className=' opacity-[0.6] font-light text-sm'>, no charge for crypto-to-crypto transactions</span>
                </p>
        </div>
</div>
<div className='w-full  flex-col flex lg:hidden gap-5 pb-10 pt-10'>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No onboarding fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No gas fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No ongoing fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>Only pay if and when you use our services</p>
</div>
{/* <div className='block lg:hidden'>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Polygon</span> - Minimum charge: USD 30</p>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Mainnet </span> - Minimum charge: USD 100</p>
</div> */}
</div>

</section>
{/*.......................... pricing section ends now .......... */}


{/* .............integrating with any crypto invoices section starts .............. */}
 <section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20 mb-10'>

<div className='lg:w-[45%] md:w-[80%] w-full'>
       <div className='w-full flex justify-center lg:justify-start py-5'>
       <span className=' font-medium  text-2xl lg:text-start text-center gradientTextHome'>
        For business
        </span>
       </div>
        <h2 className='xl:text-6xl md:text-5xl text-3xl text-center lg:text-start xl:w-[90%] font-medium xl:leading-18 md:leading-16 leading-12 pb-10'>A Digital Alternative to <span className='gradientTextHome'>Metax Digital</span> Currency
        </h2>

<div>
<div className=''>
<div className='w-full  flex-col flex  gap-5 pb-10'>
<p className='flex items-center gap-3 text-xl font-light'><span className=''><img src={frame} alt="" /></span>Convert GBP to USDT</p>
        <p className='flex items-center gap-3 text-xl font-light'><span className=''><img src={frame} alt="" /></span>Convert EURO to USDT Conversion</p> <p className='flex items-center gap-3 text-xl font-light'><span className=''><img src={frame} alt="" /></span>
        Convert USD to USDT</p> <p className='flex items-center gap-3 text-xl font-light'><span className=''><img src={frame} alt="" /></span>Seamless Conversion</p> <p className='flex items-center gap-3 text-xl font-light'><span className=''><img src={frame} alt="" /></span>Convert USDT to Fiat (£, €, $ )</p>
</div>
         <div className='w-full flex justify-center lg:justify-start'>
         <button className='bg-btnBg hover:bg-hoverBg py-3 px-6 rounded-full text-lg font-light'>Get the app</button>
       
         </div>
                  </div>
</div>
</div>


<div className='lg:w-[48%] md:w-[80%] flex justify-center pt-10 lg:pt-0  w-full'>
<img src={section1} alt="" />
</div>

</section> 

{/* ......... Check latest news section start .......... */}
<main >
<section className='flex flex-col lg:flex-row px-5 py-20 gap-10 md:p-10  bg-[#0C101A] w-full rounded-t-4xl lg:p-10 xl:p-0 xl:py-2 border-border border-[1px] justify-between xl:relative mb-5'>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 lg:w-full justify-center text-center lg:text-start'>
        <h2 className='xl:text-5xl md:text-[45px] text-[37px] font-medium'>Check latest news</h2>
        <p className='font-light pt-5 md:pt-0 leading-7'>Stay informed with the newest updates and news.
        </p>
        

</div>
<img src={first} alt="" className='lg:w-full md:w-[50%] w-[38%] object-contain hidden xl:block' />
<div className='flex justify-center items-center'>
  
<Link to='/blog' className='bg-btnBg flex justify-center items-center hover:bg-hoverBg md:py-3 lg:w-[220px] h-fit md:w-[180px] md:px-0 px-2 py-4 rounded-full text-sm md:text-lg font-light xl:absolute xl:top-32 xl:right-14 w-[330px] '>Check our blog</Link>
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
  
<Link to='/contact' className='bg-white text-btnBg hover:text-white hover:bg-hoverBg md:py-3 lg:w-[220px] h-fit md:w-[180px] md:px-0 px-2 py-4 rounded-full text-sm md:text-lg font-light xl:absolute xl:top-32 flex justify-center items-center xl:right-14 w-[330px]'>Contact us</Link>
         
</div>
</section>
</main>
{/* ......... Check latest news section end .......... */}
</div>
<main className='w-full text-white homeSecLast pb-28'>
<Slider/>

</main>

    </div>
  )
}

export default Home
