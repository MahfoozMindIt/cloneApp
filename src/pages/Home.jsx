import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
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
import grid1 from '../assets/grid1.svg';
import grid2 from '../assets/grid2.svg';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.svg';
import line from '../assets/download1.svg';
import side from '../assets/side.svg';
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import Slider from '../components/slider/Slider';

const Home = () => {
        
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
      <main className='width  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute w-full xl:top-50 top-50 z-10' />
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-10 md:pt-24 xl:pt-16'>
        <div className='w-fit items-center  gap-3 bg-[#0C193D] flex p-2 border-btnBg border-[1px] rounded-xl'>
            <p className='bg-btnBg w-14 py-1 font-semibold xl:text-[15px] md:text-[13px] text-[10px] flex items-center justify-center rounded-full '>New</p>
            <p className='xl:text-[15px] md:text-[13px] text-[10px]'><span className='font-semibold'>Introducing DeFi Loans</span> - Access Fiat liquidity without selling your assets. <Link to='/blog' className='text-v4'>Learn more</Link></p>
        </div>
        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='xl:text-7xl md:text-6xl text-4xl text-center font-medium'>
            What can <span className='gradientTextHome'>Metax offer you?</span>
            </h1>
            <p className='text-center'>A Non-Custodial Solution Opening the Doors of TradFi for <br className='hidden md:block'/> Web3 Businesses and Founders.</p>
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
     Loans
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
     OTC Trades
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
     Tokenised Securities
     </h2>
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             <div className='p-7  card  rounded-2xl flex flex-col gap-3 border-border border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-[25px] font-medium'/></div>
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
     <p className='opacity-[0.7] font-thin text-sm leading-6'>Swiss banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
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
     Loans
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
     OTC Trades
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
     <p className='opacity-[0.7] font-light text-sm leading-6'>Swiss banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
             </div> 
        
     
     
             </section>
             {/* card section ends  now........... */}


             {/* ......................... Enhanced Functionality    section   starts ................. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between homeSec2 items-center w-full pt-20 md:mb-[200px]'>

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
<span className='text-btnBg leading-18'>Eas</span><span className='text-v3'>y integra</span><span className='text-v4'>tion</span> with <br className='hidden lg:block '/> different wallets
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
<h1 className='text-center md:text-5xl text-5xl font-medium'>A solution for different cases</h1>
<div className='grid grid-cols-1 lg:grid-cols-2 lg:w-full md:w-[80%] gap-10 pt-20'>
        <Link to='/ultra-high-net-worth-individual' className='hover:scale-[1.01] transition-all duration-500'><div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-[#1A2032]  box rounded-xl font-medium'><span className='gradientTextHome'>UHNWI </span></span>
                <h1 className='text-2xl font-medium py-5 pt-8'>For Ultra High Net-Worth Individuals</h1>
                <p className='opacity-[0.8]  font-light text-sm pb-3'>Metax Digital offers a solution that allows Ultra and High Net-Worth Individuals to manage their assets in a unique platform with Swiss banking-style service.</p>
                <span className='font-medium text-sm'>View more</span>
                <img src={grid1} alt="" className='w-full object-cover pt-8'/>
        </div></Link>
        <Link className='hover:scale-[1.01] transition-all duration-500' to='/daos-and-organizations'><div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
        <span className='bg-[#1A2032]  box rounded-xl font-medium'><span className='gradientTextHome'>Organizations + DAOs </span></span>
                <h1 className='text-2xl font-medium py-5 pt-8'>For Organizations and DAOs</h1>
                <p className='opacity-[0.8]  font-light text-sm pb-3'>Our platform allows companies and DAOs to pay for Goods, Services, Contractors, and much more.</p>
                <span className='font-medium text-sm'>View more</span>
                <img src={grid2} alt="" className='w-full object-cover pt-[55px]'/>
        </div></Link>
        <Link className='hover:scale-[1.01] transition-all duration-500' to='/institutional'><div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
        <span className='bg-[#1A2032]  box rounded-xl font-medium'><span className='gradientTextHome'>Institutional </span></span>
                <h1 className='text-2xl font-medium py-5 pt-8'>For Institutional Entities</h1>
                <p className='opacity-[0.8]  font-light text-sm pb-3'>Metax Digital can help institutions redefine the landscape of challenges and opportunities in the dynamic Web3 payment world.</p>
                <span className='font-medium text-sm'>View more</span>
                <img src={grid3} alt="" className='w-full object-cover pt-8'/>
        </div></Link>
        <Link className='hover:scale-[1.01] transition-all duration-500' to='/platform'><div style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}} className=' border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-white font-semibold box1 rounded-xl  tracking-wider'><span className='text-btnBg'>Platforms</span> </span>
                <h1 className='text-2xl font-medium py-5 pt-8'>For Platform Services</h1>
                <p className='opacity-[0.8]  font-light text-sm pb-3'>Access more features and add more value to your customers through Metax Digital’s crypto to fiat and crypto to crypto payments.</p>
                <span className='font-medium'>View more</span>
                <img src={grid4} alt="" className='w-full object-cover pt-8'/>
        </div></Link>

</div>
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
<div className=' md:w-[90%]  w-[95%] width  h-96 mt-[500px] lg:mt-[400px] mb-[3400px] md:mb-[3100px] lg:mb-[1600px] xl:mb-[1850px]'>
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
<div className='hidden lg:block'>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Polygon</span> - Minimum charge: USD 30</p>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Mainnet </span> - Minimum charge: USD 100</p>
</div>
</div>


<div className='lg:w-[53%] md:w-[80%] w-full'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='border-border border-[1px] xl:h-[480px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className=' text-8xl font-bold'><span className='gradientTextHome'>1%</span></h2>
<span className='text-[#2E313A] text-5xl'>*</span>
                </div>
                <h3 className='text-2xl font-medium pt-7'>Crypto to Fiat</h3>
                <p className='opacity-[0.6] font-light py-5 text-sm'>Convert cryptocurrency to cash with our user-friendly platform, ensuring easy access the traditional financial system.</p>
                <p className='font-semibold pb-5 text-sm lg:pb-20'>
                ℹ️   1% fee + $10 per payment <span className='opacity-[0.6] font-light'> for crypto-to-fiat transactions</span>
                </p>
        </div>
        <div className='border-border border-[1px] xl:h-[480px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className='text-8xl font-bold'><span className='gradientTextHome'>0%</span></h2>
                </div>
                <h3 className='text-2xl font-medium pt-7'>Crypto to Crypto</h3>
                <p className='opacity-[0.6] font-light py-5 text-sm'>Streamline batch cryptocurrency transactions using our platform. Manage multiple payments with ease, precision, and reliability.</p>
                <p className='font-semibold pb-5 xl:pb-20'>
                ℹ️  0% fee <span className=' opacity-[0.6] font-light text-sm'>, no charge for crypto-to-crypto transactions</span>
                </p>
        </div>
</div>
<div className='w-full  flex-col flex lg:hidden gap-5 pb-10 pt-10'>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No onboarding fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No gas fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No ongoing fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>Only pay if and when you use our services</p>
</div>
<div className='block lg:hidden'>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Polygon</span> - Minimum charge: USD 30</p>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Mainnet </span> - Minimum charge: USD 100</p>
</div>
</div>

</section>
{/*.......................... pricing section ends now .......... */}


{/* .............integrating with any crypto invoices section starts .............. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20 mb-10'>

<div className='lg:w-[45%] md:w-[80%] w-full'>
        <h2 className='xl:text-6xl md:text-5xl text-3xl text-center lg:text-start font-medium xl:leading-18 md:leading-16 leading-12'>Integrating with <br className='hidden lg:block '/> <span className='gradientTextHome'>any crypto invoicing</span> and <span className='gradientTextHome'>Payment system</span>
        </h2>

<div className='w-full flex justify-center lg:justify-start'>
<p className='opacity-[0.6] w-[90%] font-light text-center lg:text-start pt-5 pb-10 md:py-10 xl:w-[75%]'>The Payment API empowers our Partners to enable Blockchain Businesses to settle invoices using both Crypto and Fiat.
</p>
</div>
<div>
<div className='flex flex-col md:flex-row md:gap-3 gap-10 w-full  justify-center lg:justify-start'>
          
          <button className='bg-btnBg hover:bg-hoverBg py-3 px-6 rounded-full text-lg font-medium'>See our docs</button>
          <button className='bg-white hover:bg-hoverBg hover:text-white text-btnBg py-3 px-6 text-lg font-medium rounded-full'>See use case</button>
                  </div>
</div>
</div>


<div className='lg:w-[48%] md:w-[80%] flex justify-center pt-10 lg:pt-0  w-full'>
<img src={side} alt="" />
</div>

</section>
{/* .............integrating with any crypto invoices section ends .............. */}

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
