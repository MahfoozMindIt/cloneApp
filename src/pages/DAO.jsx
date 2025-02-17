import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import n1 from '../assets/n1.svg'
import n2 from '../assets/n2.svg'
import n3 from '../assets/n3.svg'
import n4 from '../assets/n4.svg'
import n5 from '../assets/n5.svg'
import { IoIosArrowDown, IoIosCard } from 'react-icons/io';
import line from '../assets/curveline.svg';
import { MdAccountTree, MdOutlineCompareArrows, MdOutlinePrivacyTip } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa6'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { GiTwoCoins } from 'react-icons/gi'
import { AiOutlineGlobal } from 'react-icons/ai'

const UltraHigh = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#000205 30%,#010102 )"}}>
      <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-40'>

        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl text-center font-medium'>Supercharging Crypto <br /> Companies and DAO’s
            </h1>
            <p className='text-center md:text-[17px] text-[15px]'>Pay for Goods, Services, Contractors and much more with Metax Digital</p>
            <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
        </div>
        <div className='xl:pt-16 pt-10 text-md animate-ping '>
            <IoIosArrowDown />
            <IoIosArrowDown />
        </div>



        {/* ......................... Enhanced Functionality    section   starts ..............



{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='pb-20 pt-80 w-full'>
<h1 className='xl:text-6xl  md:text-4xl text-4xl text-center font-medium xl:leading-18 md:leading-14 leading-10'>The ultimate solution for<br className='hidden md:block'/>the decentralized world</h1>


<main className='grid grid-cols-1 gap-10'>
    
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20'>
        <main className='xl:h-[420px]  border-border border-[1px] bg-card rounded-2xl'>
            <img src={n1} alt="" className='w-full'/>
        <div className= 'p-7   px-5 pt-5'>
                
                <h1 className='text-xl font-semibold py-5'>Full-Spectrum of Crypto Services
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>From secure wallet integrations to efficient crypto accounting, experience comprehensive support for all your transactions and business needs.

</p>
                
        </div>
        </main>
        <main className='xl:h-[420px] border-border border-[1px] bg-card  rounded-2xl'>
            
            <img src={n2} alt="" className='w-full'/>
        <div className= 'p-7  px-5 pt-5'>
                
                <h1 className='text-xl font-semibold py-5'>Innovative Payment Solutions
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Upgrade your operations with our cutting-edge payment rails and processing solutions that allow you to execute payments worldwide in fiat currencies with any major stablecoin.</p>
                
        </div>
        </main>
        <main className='xl:h-[420px] border-border border-[1px] bg-card rounded-2xl'>
            
            <img src={n3} alt="" className='w-full' />
        <div className= 'p-7 px-5 pt-5 '>
                
                <h1 className='text-xl font-semibold py-5'>Transparent Pricing</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Simplified fees and accounting within Metax Digital platform allow you to reconcile one on-chain transaction with many payments for goods and services.



</p>
                
        </div>
        </main>

</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
<main className='xl:h-[420px] border-border border-[1px] bg-card  rounded-2xl'>
            
            <img src={n4} alt="" className='w-full'/>
        <div className= 'p-7  px-5 pt-5'>
                
                <h1 className='text-xl font-semibold py-5'>Invoicing and Accounts Payables</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Streamline your financial operations with our professional invoices, and accounts payables solution by tracking and managing your payments within one platform.

</p>
                
        </div>
        </main>
        <main className='xl:h-[420px] border-border border-[1px] bg-card rounded-2xl'>
            
            <img src={n5} alt="" className='w-full'/>
        <div className= 'p-7 px-5 pt-5 '>
                
                <h1 className='text-xl font-semibold py-5'>OTC Custom Service
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Your organization can access end-to-end white glove and private solutions for any needs you may have - “you find a problem, we fix it”.

</p>
                
        </div>
        </main>
</div>
</main>

</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}




{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
<h1 className='xl:text-6xl md:text-5xl text-4xl text-center font-medium md:leading-18 leading-10'>Empower Your Crypto <br className='hidden md:block'/> Vision with Metax Digital</h1>
<p className='text-[grey] text-center pt-5 lg:pt-10'>Metax Digital is the first regulated company licensed to process financial transactions on behalf of unincorporated DAOs</p>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
<div className= 'p-7 bg-card border-border border-[1px] px-5 pt-3 rounded-2xl xl:h-[560px] lg:col-span-1'>
                
                <h1 className='text-xl font-semibold py-5'>Flat 1% Fee for Crypto to Fiat (C2F) and Fiat to Crypto (F2C) Transactions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Companies and DAOs can easily exchange money between crypto and fiat currencies, and vice-versa, with a flat 1% fee (minimum of 100 USD for Ethereum main net and 30 USD for Polygon).</p>
                <p className='text-[200px] ml-[110px] md:ml-[420px] lg:ml-[30px] xl:ml-[135px] font-bold text-v4 font-mono'>1%
                </p>
                
        </div>
        
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:col-span-2'>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-xl font-semibold py-5'>Zero Costs for Crypto to Crypto transactions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Our platform users can access crypto to crypto single or batch transactions easily and without any additional costs.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-xl font-semibold py-5'>Zero service fees for swaps</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Swapping one cryptocurrency for another has no service fees on our platform, being subject only to exchange rates.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-xl font-semibold py-5'>Zero Costs for Crypto to Crypto transactions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Our platform provides an Accounts Payable solution without charging any fees to all its users, whether companies or DAOs.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-xl font-semibold py-5'>No extra fees for Invoices + Documentary Proof of Transactions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Companies and DAOs interested in these features will not face any extra fees</p>
                
        </div>

</div>
</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}


{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
    <p className='text-center pb-5 text-xl'><span className='text-btnBg'>Optimize Oper</span><span className='text-v3 '>ations an</span> 
    <span className='text-v4'>d Access Capital</span></p>
<h1 className='xl:text-6xl  md:text-4xl text-4xl text-center font-medium xl:leading-18 md:leading-14 leading-10'>Crypto Transactions Made Simple:<br className='hidden md:block'/> Pay invoices, Raise capital, Ensure<br className='hidden md:block'/>payroll</h1>
<p className='text-[grey] text-center pt-5 lg:pt-10'>
Pay invoices for goods and services, raise capital from traditional investors, and streamline payroll. With our Crypto to Fiat<br className='hidden xl:block'/>feature, ensure smooth employee payments in their preferred currency or facilitate crypto to crypto transactions.</p>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Pay invoices for services and goods with Metax Digital
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Simplify your business transactions by paying for goods, services, contractors, and all other expenses through Metax Digital’s platform</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Raise capital from traditional investors</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Receive investments in fiat and convert them to crypto on Metax Digital´s platform, ensuring a direct transfer to your self-custodial wallet.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Streamline payroll with Metax Digital</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Use our Crypto to Fiat feature to ensure your employees are paid in their preferred currency, or apply a crypto to crypto transaction if that’s their choice.

</p>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}




        </section>

      </main>
      
<div className='w-full flex justify-center flex-col xl:mb-[400px] mb-[500px] items-center relative'>
<img src={line} alt="" className='w-full z-30'/>
<img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
<main className='md:w-[90%] xl:w-[85%] w-[95%]    absolute md:top-40 top-20 lg:top-50 z-30 '>
<h1 className=' md:text-5xl text-4xl font-semibold text-center  z-30'>Level up with Metax Digital</h1>
<div className='w-full flex justify-center'>
    
<p className='text-[grey] text-lg text-center py-10 md:w-[60%]'> Experience borderless banking that sends your transactions to banking partners <br className='hidden xl:block'/> and connects you to the Tradfi world and network liquidity providers.

</p>
</div>
<div className='text-center'><button className='w-[220px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>
<main className='w-[95%] md:[90%] xl:[85%] pb-28'>

<section className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-10'>
        
        {/* div 1 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><AiOutlineGlobal className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto to Fiat Payments
     </h2>
     <p className='text-[grey] font-semibold para'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             {/* div 2 */}
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><MdAccountTree className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Crypto Payments
     </h2>
     <p className='text-[grey] font-semibold'>Process batched crypto payments hassle-free, perfect for payroll and more.</p>
     
             </div>
      {/* div 3 */}
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><GiTwoCoins className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Loans
     </h2>
     <p className='text-[grey] font-semibold'>Providing web3 businesses and their founders access to specialized loan solutions and factoring</p>
     
             </div>
      
        
        
    {/* div 4 */}



{/* div 4 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><BsPersonFill className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Virtual Accounts
     </h2>
     <p className='text-[grey] font-semibold'>Create named e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
             {/* div 5 */}
             <div className='p-7 pb-10 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><MdOutlineCompareArrows className='text-3xl'/></div>
     <h2 className='text-2xl font-bold'>
     OTC Trades
     </h2>
     <p className='text-[grey] font-semibold'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      {/* div 6 */}
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
      
        
        {/* div 7 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <div className='text-btnBg bg-[whitesmoke] p-2 w-fit rounded-xl'><RiSecurePaymentLine className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Tokenised Securities
     </h2>
     <p className='text-[grey] font-semibold'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             {/* div 8 */}
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <div className='text-[#2A334B] bg-[whitesmoke] p-2 w-fit rounded-xl'><FaFileInvoiceDollar className='text-2xl'/></div>
     <h2 className='text-2xl font-bold'>
     Payables & Invoice Me
     </h2>
     <p className='text-[grey] font-semibold'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div>
      {/* div 9 */}
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
</main>
    </div>
  )
}

export default UltraHigh
