import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
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
import line from '../assets/curveline.svg';
import side from '../assets/side.svg';
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import Slider from '../components/slider/Slider';

const Home = () => {
        
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
      <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-28 xl:pt-44'>
        <div className='w-fit items-center  gap-3 bg-[#0C193D] flex p-2 border-btnBg border-[1px] rounded-xl'>
            <p className='bg-btnBg w-14 py-1 font-semibold xl:text-[15px] md:text-[13px] text-[10px] flex items-center justify-center rounded-full '>New</p>
            <p className='xl:text-[15px] md:text-[13px] text-[10px]'><span className='font-semibold'>Introducing DeFi Loans</span> - Access Fiat liquidity without selling your assets. <Link className='text-v4'>Learn more</Link></p>
        </div>
        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='xl:text-7xl md:text-5xl text-4xl text-center font-semibold'>
            What can <span className='text-btnBg'>Met</span><span className='text-v3'>ax of</span><span className='text-v4'>fer you?</span>
            </h1>
            <p className='text-center md:text-[19px] text-[17px]'>A Non-Custodial Solution Opening the Doors of TradFi for <br className='hidden md:block'/> Web3 Businesses and Founders.</p>
            <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
        </div>
        
{/* cards section start .......... */}
<section className=' grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
        
        {/* flex 1 */}
        <section className='flex gap-10 flex-col cards'>
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><AiOutlineGlobal className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto to Fiat Payments
     </h2>
     <p className='text-[grey] font-semibold'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdAccountTree className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto Payments
     </h2>
     <p className='text-[grey] font-semibold'>Process batched crypto payments hassle-free, perfect for payroll and more.</p>
     
             </div>
      
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><GiTwoCoins className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Loans
     </h2>
     <p className='text-[grey] font-semibold'>Providing web3 businesses and their founders access to specialized loan solutions and factoring</p>
     
             </div>
      
        
        
        </section>
     
        {/* flex 2 */}
        <section className='flex gap-10 xl:mt-10 mt-0 flex-col cards'>
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><BsPersonFill className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Virtual Accounts
     </h2>
     <p className='text-[grey] font-semibold'>Create named e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
             <div className='p-7 pb-10 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlineCompareArrows className='text-3xl'/></div>
     <h2 className='text-2xl font-bold'>
     OTC Trades
     </h2>
     <p className='text-[grey] font-semibold'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      
             <div className='p-7 pb-10 xl:h-[240px]  rounded-2xl border-[#1A2436] border-[1px] flex flex-col gap-3' style={{backgroundColor:"#0C101A"}}>
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
        <section className='flex gap-10 flex-col cards'>
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><RiSecurePaymentLine className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Tokenised Securities
     </h2>
     <p className='text-[grey] font-semibold'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Payables & Invoice Me
     </h2>
     <p className='text-[grey] font-semibold'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div>
      
             <div className='p-7 xl:h-[240px]  rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                     
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlinePrivacyTip className='text-3xl'/></div>
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
Seamlessly integrate your existing SAFE wallet, MetaMask or <br className='hidden lg:block '/> WalletConnect with Metax to unlock a world of effortless transactions.
</p>
</div>


<div className='lg:w-[48%] w-full'>
<div className='bg-[#0B101B] w-full h-[500px] rounded-2xl border-[#181F2F] border-[1px]'>

</div>
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}

{/* ........ A solution for different cases section starts ................... */}
<section className='py-20 w-full'>
<h1 className='text-center md:text-6xl text-5xl font-semibold'>A solution for different cases</h1>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20'>
        <div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-[#1A2032] py-2 px-5 rounded-xl text-sm font-semibold'><span className='text-btnBg'>UH</span><span className='text-v3'>NWI</span> </span>
                <h1 className='text-2xl font-semibold py-5'>For Ultra High Net-Worth Individuals</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Metax Digital offers a solution that allows Ultra and High Net-Worth Individuals to manage their assets in a unique platform with Swiss banking-style service.</p>
                <span className='font-semibold'>View more</span>
                <img src={grid1} alt="" className='w-full object-cover pt-8'/>
        </div>
        <div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-[#1A2032] py-2 px-5 rounded-xl text-sm font-semibold'><span className='text-btnBg'>UH</span><span className='text-v3'>NWI</span> </span>
                <h1 className='text-2xl font-semibold py-5'>For Organizations and DAOs</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Our platform allows companies and DAOs to pay for Goods, Services, Contractors, and much more.</p>
                <span className='font-semibold'>View more</span>
                <img src={grid2} alt="" className='w-full object-cover pt-8'/>
        </div>
        <div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-[#1A2032] py-2 px-5 rounded-xl text-sm font-semibold'><span className='text-btnBg'>UH</span><span className='text-v3'>NWI</span> </span>
                <h1 className='text-2xl font-semibold py-5'>For Institutional Entities</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Metax Digital can help institutions redefine the landscape of challenges and opportunities in the dynamic Web3 payment world.</p>
                <span className='font-semibold'>View more</span>
                <img src={grid3} alt="" className='w-full object-cover pt-8'/>
        </div>
        <div className='bg-card border-border border-[1px] px-5 pt-5 rounded-2xl'>
                <span className='bg-[#1A2032] py-2 px-5 rounded-xl text-sm font-semibold'><span className='text-btnBg'>UH</span><span className='text-v3'>NWI</span> </span>
                <h1 className='text-2xl font-semibold py-5'>For Platform Services</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Access more features and add more value to your customers through Metax Digital’s crypto to fiat and crypto to crypto payments.</p>
                <span className='font-semibold'>View more</span>
                <img src={grid4} alt="" className='w-full object-cover pt-8'/>
        </div>

</div>
</section>
{/* ........ A solution for different cases section ends ...................  */}

        </section>

      </main>
      
<div className='w-full flex justify-center flex-col items-center relative'>
<img src={line} alt="" className='w-full z-30'/>
<img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
<main className='md:w-[90%] xl:w-[85%] w-[95%]   absolute md:top-40 top-20 lg:top-50 z-30 '>
<h1 className='text-6xl font-semibold text-center  z-30'>Level up with <span className='text-btnBg'>Met</span><span className='text-v3'>ax Di</span><span className='text-v4'>gital</span></h1>
<p className='text-[grey] text-lg text-center py-10'>A hassle-free solution that sends your transactions to banking partners, and <br className='hidden lg:block'/> connects you to the TradFi world and network liquidity providers.</p>
<div className='text-center'><button className='w-[220px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>
<div className=' md:w-[90%] xl:w-[85%] w-[95%]  h-96 mt-[400px] mb-[2400px] md:mb-[2650px] lg:mb-[1950px] xl:mb-[1870px]'>
{/*.......................... pricing section starts .......... */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20'>

<div className='lg:w-[46%] w-full'>
        <h2 className='xl:text-6xl text-5xl font-semibold leading-18'>
        Transaction Flat <br className='hidden lg:block '/> Fee Pricing
        </h2>

<p className='text-[grey] text-lg py-10'>We believe in transparent pricing that puts you in control. With us, there are no onboarding fees or ongoing fees to worry about. You only pay for our services when you actually use them.
</p>
<div className='w-full flex flex-col gap-5 pb-10'>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No onboarding fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No gas fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>No ongoing fees</p>
        <p className='flex items-center gap-3 text-2xl font-semibold'><span className='bg-[#00AD45] p-1 text-white rounded-full text-xl'><IoMdCheckmark /></span>Only pay if and when you use our services</p>
</div>
<div>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Polygon</span> - Minimum charge: USD 30</p>
        <p className='text-[13px] text-[grey]'><span className='text-white font-semibold'>*Mainnet </span> - Minimum charge: USD 100</p>
</div>
</div>


<div className='lg:w-[53%] w-full'>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='border-border border-[1px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className='text-btnBg text-8xl font-bold'>1<span className='text-v4'>%</span></h2>
<span className='text-[#2E313A] text-6xl'>*</span>
                </div>
                <h3 className='text-2xl font-semibold pt-7'>Crypto to Fiat</h3>
                <p className='text-[grey] py-5'>Convert cryptocurrency to cash with our user-friendly platform, ensuring easy access the traditional financial system.</p>
                <p className='font-semibold pb-20'>
                ℹ️  1% fee + variable rate <span className='font-normal text-[grey]'>per payment (10 USD or more) for crypto-to-fiat transactions</span>
                </p>
        </div>
        <div className='border-border border-[1px] p-5 bg-card rounded-2xl'>
                <div className='flex justify-between'>
                        
<h2 className='text-btnBg text-8xl font-bold'>0<span className='text-v4'>%</span></h2>
                </div>
                <h3 className='text-2xl font-semibold pt-7'>Crypto to Crypto</h3>
                <p className='text-[grey] py-5'>Streamline batch cryptocurrency transactions using our platform. Manage multiple payments with ease, precision, and reliability.</p>
                <p className='font-semibold pb-20'>
                ℹ️  0% fee <span className='font-normal text-[grey]'>,no charge for crypto-to-crypto transactions</span>
                </p>
        </div>
</div>
</div>

</section>
{/*.......................... pricing section ends now .......... */}


{/* .............integrating with any crypto invoices section starts .............. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20 mb-10'>

<div className='lg:w-[45%] w-full'>
        <h2 className='xl:text-6xl text-4xl font-semibold xl:leading-18 leading-12'>Integrating with <br className='hidden lg:block '/> <span className='text-btnBg'>any cryp</span><span className='text-v3'>to</span> <br className='hidden lg:block '/> <span className='text-v4'>
        invoicing</span> and <br className='hidden lg:block '/> <span className='text-btnBg'>Payme</span><span className='text-v4'>nt system</span>
        </h2>

<p className='text-[grey] text-lg py-10'>The Payment API empowers our Partners to enable Blockchain Businesses to settle invoices using both Crypto and Fiat.
</p>
<div>
<div className='flex flex-wrap gap-3 '>
          
          <button className='bg-btnBg hover:bg-hoverBg py-3 px-6 rounded-full text-lg font-medium'>See our docs</button>
          <button className='bg-white hover:bg-hoverBg hover:text-white text-btnBg py-3 px-6 text-lg font-medium rounded-full'>See use case</button>
                  </div>
</div>
</div>


<div className='lg:w-[48%] w-full'>
<img src={side} alt="" />
</div>

</section>
{/* .............integrating with any crypto invoices section ends .............. */}

{/* ......... Check latest news section start .......... */}
<section className=' md:flex hidden bg-[#0C101A] w-full rounded-t-4xl py-2 border-border border-[1px] justify-between relative mb-5'>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 w-[50%] lg:w-full justify-center'>
        <h2 className='xl:text-5xl lg:text-4xl md:text-xl font font-semibold'>Check latest news</h2>
        <p className='md:text-sm text-[13px] lg:text-normal'>
        Stay informed with the newest updates and news.
        </p>
        

</div>
<img src={first} alt="" className='lg:w-full md:w-[50%] w-[38%] object-contain' />
<button className='bg-btnBg hover:bg-hoverBg md:py-3 lg:w-[220px] md:w-[150px] md:px-0 px-2 py-1 rounded lg:rounded-full text-sm md:text-lg md:font-medium absolute lg:top-26 md:top-10 top-5 right-5 md:right-14'>See our blog</button>
         
</section>
<section className=' md:flex hidden w-full rounded-b-4xl border-border border-[1px] justify-between relative' style={{backgroundImage:"linear-gradient(to top,#2B5ABC 10%,#161E3A   )"}}>
<div className='flex flex-col gap-1 md:gap-5 md:pl-10 pl-5 lg:w-full w-[50%] justify-center'>
        <h2 className='xl:text-5xl lg:text-4xl md:text-xl font font-semibold'>Have any questions?</h2>
        <p className='md:text-sm text-[13px] lg:text-normal'>
        Feel free to reach out to us anytime. We are here to help you!
        </p>
        

</div>
<img src={second} alt="" className='lg:w-full w-[50%]'/>
<button className='bg-white text-btnBg hover:text-white hover:bg-hoverBg md:py-3 lg:w-[220px] md:w-[150px] md:px-0 px-2 py-1 lg:rounded-full rounded md:text-lg text-sm md:font-medium absolute lg:top-26 md:top-10 top-5 right-5 md:right-14'>Contact us</button>
         
</section>
{/* ......... Check latest news section end .......... */}
</div>
<main className='w-full text-white pt-10 xl:pt-0 pb-28'>
<Slider/>

</main>

    </div>
  )
}

export default Home
