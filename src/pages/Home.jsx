import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdAccountTree, MdOutlineCompareArrows, MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosCard } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa6';
import gateway1 from '../assets/gateway1.svg'
import gateway2 from '../assets/gateway2.svg'
import gateway3 from '../assets/gateway3.svg'

const Home = () => {
  return (
    <div className=' w-full flex justify-center'>
      <main className='md:w-[90%] w-[95%] z-30 flex items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-28 xl:pt-44'>
        <div className='w-fit items-center  gap-3 bg-[#0C193D] flex p-2 border-btnBg border-[1px] rounded-xl'>
            <p className='bg-btnBg w-14 py-1 font-semibold xl:text-[15px] md:text-[13px] text-[10px] flex items-center justify-center rounded-full '>New</p>
            <p className='xl:text-[15px] md:text-[13px] text-[10px]'><span className='font-semibold'>Introducing DeFi Loans</span> - Access Fiat liquidity without selling your assets. <Link className='text-v4'>Learn more</Link></p>
        </div>
        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='xl:text-7xl md:text-5xl text-4xl text-center font-bold'>
            What can <span className='text-btnBg'>Met</span><span className='text-v3'>ax of</span><span className='text-v4'>fer you?</span>
            </h1>
            <p className='text-center md:text-[19px] text-[17px]'>A Non-Custodial Solution Opening the Doors of TradFi for <br className='hidden md:block'/> Web3 Businesses and Founders.</p>
            <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
        </div>
        
{/* cards section start .......... */}
<section className=' grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        
        {/* flex 1 */}
        <section className='flex gap-10 flex-col'>
        <div className='p-7 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><AiOutlineGlobal className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto to Fiat Payments
     </h2>
     <p className='text-[grey] font-semibold'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             <div className='p-7 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdAccountTree className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto Payments
     </h2>
     <p className='text-[grey] font-semibold'>Process batched crypto payments hassle-free, perfect for payroll and more.</p>
     
             </div>
      
             <div className='p-7 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><GiTwoCoins className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Loans
     </h2>
     <p className='text-[grey] font-semibold'>Providing web3 businesses and their founders access to specialized loan solutions and factoring</p>
     
             </div>
      
        
        
        </section>
     
        {/* flex 2 */}
        <section className='flex gap-10 xl:mt-10 mt-0 flex-col'>
        <div className='p-7 py-10 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><BsPersonFill className='text-3xl'/></div>
     <h2 className='text-2xl font-bold'>
     Virtual Accounts
     </h2>
     <p className='text-[grey] font-semibold'>Create named e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
             <div className='p-7 py-14 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlineCompareArrows className='text-3xl'/></div>
     <h2 className='text-2xl font-bold'>
     OTC Trades
     </h2>
     <p className='text-[grey] font-semibold'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      
             <div className='p-7 lg:w-[450px] md:w-fit rounded-2xl border-[#1D212A] border-[1px] flex flex-col gap-5' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><IoIosCard className='text-2xl'/></div>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '>Comin<span className='text-v4'>g soon</span></p>
                 </div>
     <h2 className='text-2xl font-bold'>
     Cards
     </h2>
     <p className='text-[grey] font-semibold'>Physical or virtual debit cards in either EUR or GBP that interact flawlessly with your non-custodial wallets.</p>
     
             </div>
      
        
        
        </section>
     
        {/* flex-3   */}
        <section className='flex gap-10 flex-col'>
        <div className='p-7 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><RiSecurePaymentLine className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Tokenised Securities
     </h2>
     <p className='text-[grey] font-semibold'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             <div className='p-7 rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-3xl'/></div>
     <h2 className='text-2xl font-bold'>
     Payables & Invoice Me
     </h2>
     <p className='text-[grey] font-semibold'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div>
      
             <div className='p-7 py-10 lg:w-[430px] w-fit rounded-2xl flex flex-col gap-5 border-[#1D212A] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlinePrivacyTip className='text-2xl'/></div>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg '>Comin<span className='text-v4'>g soon</span></p>
                 </div>
     <h2 className='text-2xl font-bold'>
     Compliant Privacy
     </h2>
     <p className='text-[grey] font-semibold'>Swiss banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
             </div> 
        
        </section>
     
     
             </section>
             {/* card section ends  now........... */}



             {/* ......................... Enhanced Functionality    section   starts ................. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20'>

<div className='lg:w-[48%] w-full'>
        <h2 className='lg:text-6xl text-5xl font-semibold leading-18'>
                Enhanced <br className='hidden lg:block '/> Functionality
        </h2>
        <div className='flex gap-5 items-center flex-wrap py-10'>
                <img src={gateway1} alt="" />
                <img src={gateway2} alt="" />
                <img src={gateway3} alt="" />
        </div>
<h3 className='text-4xl font-semibold pt-3 pb-7'>
<span className='text-btnBg leading-18'>Eas</span><span className='text-v3'>y integra</span><span className='text-v4'>tion with</span> <br className='hidden lg:block '/> different wallets
</h3>
<p className='text-[grey] text-lg'>
Seamlessly integrate your existing SAFE wallet, MetaMask or <br className='hidden lg:block '/> WalletConnect with Skyline to unlock a world of effortless transactions.
</p>
</div>


<div className='lg:w-[48%] w-full'>
<div className='bg-[#0B101B] w-full h-[500px] rounded-2xl border-[#181F2F] border-[1px]'>

</div>
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}
        </section>

      </main>
    </div>
  )
}

export default Home
