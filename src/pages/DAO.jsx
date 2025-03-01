import React from 'react'
import "../styles/Home.css"
import "../styles/DAO.css"
import BgImg from '../assets/bgImg.svg'
import n1 from '../assets/n1.svg'
import n2 from '../assets/n2.svg'
import n3 from '../assets/n3.svg'
import n4 from '../assets/n4.svg'
import "../styles/UltraHigh.css"
import dao from "../assets/dao.png";
import { IoIosArrowDown, IoIosCard } from 'react-icons/io';
import line from '../assets/download1.svg';
import MetaData from '../components/Metadata';

const UltraHigh = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#000205 30%,#010102 )"}}>
     
     <MetaData metaData={'Metax Digital | DAO'}/>
     
      <main className='md:w-[90%] xl:w-[90%] w-[95%] width-DAO  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col '>
    
        <section className=' flex w-full justify-center flex-col items-center z-30  '>
   <div className='flex flex-col backHero  items-center  gap-10 pt-24 lg:pt-24'>
            <h1 className='lg:text-7xl md:text-[55px] text-[35px] md:w-full text-center widthMainContent-DAO font-medium lg:w-[60%] lg:leading-24'>Supercharging Crypto Companies and DAO’s
            </h1>
            <p className='text-center font-light text-[16px] w-[90%] md:w-full  leading-7 '>Pay for Goods, Services, Contractors and much more with Metax Digital</p>
            <button className='w-[350px] lg:w-[220px] py-4 rounded-full bg-btnBg font-medium hover:bg-hoverBg cursor-pointer'>Join now</button>
            <div className=' animate-ping pt-8'>
            <IoIosArrowDown className='text-[13px]'/>
            <IoIosArrowDown className='text-[13px]'/>
        </div>
        </div>



        {/* ......................... Enhanced Functionality    section   starts ..............



{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='pb-20 pt-80 w-full'>
        <div className='flex justify-center w-full'>
                
<h1 className=' md:text-[45px] lg:text-[55px]  text-[34px]  md:w-full text-center font-medium lg:w-[45%] '>The ultimate solution for the decentralized world</h1>
        </div>

<div className='flex w-full justify-center'>
        
<main className='grid grid-cols-1 md:w-[85%]  lg:w-full gap-7'>
    
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 pt-20'>
            <main className='xl:h-[400px]  border-border border-[1px] bg-card rounded-2xl'>
                <img src={n1} alt="" className='w-full'/>
            <div className= 'p-7   px-5 pt-5'>
                    
                    <h1 className='text-xl font-semibold py-5'>Full-Spectrum of Crypto Services
                    </h1>
                    <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>From secure wallet integrations to efficient crypto accounting, experience comprehensive support for all your transactions and business needs.
    
    </p>
                    
            </div>
            </main>
            <main className='xl:h-[400px] border-border border-[1px] bg-card  rounded-2xl'>
                
                <img src={n2} alt="" className='w-full'/>
            <div className= 'p-7  px-5 pt-5'>
                    
                    <h1 className='text-xl font-semibold py-5'>Innovative Payment Solutions
                    </h1>
                    <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Upgrade your operations with our cutting-edge payment rails and processing solutions that allow you to execute payments worldwide in fiat currencies with any major stablecoin.</p>
                    
            </div>
            </main>
            <main className='xl:h-[400px] border-border border-[1px] bg-card rounded-2xl'>
                
                <img src={n3} alt="" className='w-full' />
            <div className= 'p-7 px-5 pt-5 '>
                    
                    <h1 className='text-xl font-semibold py-5'>Transparent Pricing</h1>
                    <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Simplified fees and accounting within Metax Digital platform allow you to reconcile one on-chain transaction with many payments for goods and services.
    
    
    
    </p>
                    
            </div>
            </main>
    
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
    <main className='xl:h-[350px] border-border border-[1px] bg-card  rounded-2xl'>
                
                <img src={n4} alt="" className='w-full'/>
            <div className= 'p-7  px-5 pt-5'>
                    
                    <h1 className='text-xl font-semibold py-5'>Invoicing and Accounts Payables</h1>
                    <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Streamline your financial operations with our professional invoices, and accounts payables solution by tracking and managing your payments within one platform.
    
    </p>
                    
            </div>
            </main>
            <main className='xl:h-[350px] border-border border-[1px] bg-card rounded-2xl'>
                
                <img src={dao} alt="" className='w-full'/>
            <div className= 'p-7 px-5 pt-5 '>
                    
                    <h1 className='text-xl font-semibold py-5'>OTC Custom Service
                    </h1>
                    <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Your organization can access end-to-end white glove and private solutions for any needs you may have - “you find a problem, we fix it”.
    
    </p>
                    
            </div>
            </main>
    </div>
    </main>
</div>

</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}




{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
        <div className='flex justify-center text-center w-full'>
                
<h1 className='lg:text-[55px] md:text-[48px]  lg:w-[45%] text-center text-[34px]  font-medium leading-12 md:leading-16  lg:leading-20 md:w-full'>Empower Your Crypto Vision with Metax Digital</h1>
        </div>
<p className='opacity-[0.7] font-light md:leading-7  leading-8 text-center pt-7'>Metax Digital is the first regulated company licensed to process financial transactions on behalf of unincorporated DAOs</p>
<main className='flex justify-center w-full'>
<div className='md:grid hidden md:grid-cols-1 w-[85%] lg:w-full lg:grid-cols-3 gap-10 pt-20'>
<div className= 'p-7 bg-card border-border border-[1px] px-5 pt-3 rounded-2xl xl:h-[560px] relative lg:col-span-1'>
                
                <h1 className='text-2xl font-medium py-5 show'>Flat 1% Fee for Crypto to Fiat (C2F) and Fiat to Crypto (F2C) Transactions</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light leading-6 pb-3 show'>Companies and DAOs can easily exchange money between crypto and fiat currencies, and vice-versa, with a flat 1% fee (minimum of 100 USD for Ethereum main net and 30 USD for Polygon).</p>
                <p className=' text-6xl lg:text-[200px]  font-bold gradientText1 absolute bottom-1 right-0 opacity-[0.5]  hide'>1%
                </p>
                
        </div>
        
    <div className='md:grid md:grid-cols-1 hidden lg:grid-cols-2 gap-10 lg:col-span-2'>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-2xl font-medium py-5'>Zero Costs for Crypto to Crypto transactions</h1>
                <p className='text-[rgba(243,243,243,0.8)] font-light text-sm leading-6 pb-3'>Our platform users can access crypto to crypto single or batch transactions easily and without any additional costs.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-2xl font-medium py-5'>Zero service fees for swaps</h1>
                <p className='text-[rgba(243,243,243,0.8)] font-light text-sm leading-6 pb-3'>Swapping one cryptocurrency for another has no service fees on our platform, being subject only to exchange rates.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-2xl font-medium py-5'>Zero Costs for Crypto to Crypto transactions</h1>
                <p className='text-[rgba(243,243,243,0.8)] font-light text-sm leading-6 pb-3'>Our platform provides an Accounts Payable solution without charging any fees to all its users, whether companies or DAOs.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px] bg-card border-border border-[1px] px-5 pt-3 rounded-2xl '>
                
                <h1 className='text-xl font-semibold py-5'>No extra fees for Invoices + Documentary Proof of Transactions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Companies and DAOs interested in these features will not face any extra fees</p>
                
        </div>

</div>
</div>
</main>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}


{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
    <p className='text-center pb-5 gradientText text-[23px] font-medium'>Optimize Operations and Access Capital</p>
<div className='flex justify-center w-full'>
<h1 className='lg:text-[55px] md:text-[43px] text-[35px]  text-center xl:w-[60%] lg:w-[65%] font-medium md:leading-16 leading-12'>Crypto Transactions Made Simple: Pay invoices, Raise capital, Ensure payroll</h1>
</div>
<div className='flex justify-center w-full'>
        
<p className='opacity-[0.7] lg:w-[75%] font-light md:w-[90%]  md:leading-7 leading-8 w-[95%] text-center pt-5 lg:pt-10'>
Pay invoices for goods and services, raise capital from traditional investors, and streamline payroll. With our Crypto to Fiat feature, ensure smooth employee payments in their preferred currency or facilitate crypto to crypto transactions.</p>
</div>
<div className='md:grid md:grid-cols-1 hidden lg:grid-cols-3 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-2xl font-medium py-5'>Pay invoices for services and goods with Metax Digital
                </h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3'>Simplify your business transactions by paying for goods, services, contractors, and all other expenses through Metax Digital’s platform</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-2xl font-medium py-5'>Raise capital from traditional investors</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3'>Receive investments in fiat and convert them to crypto on Metax Digital´s platform, ensuring a direct transfer to your self-custodial wallet.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-2xl font-medium py-5'>Streamline payroll with Metax Digital</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3'>Use our Crypto to Fiat feature to ensure your employees are paid in their preferred currency, or apply a crypto to crypto transaction if that’s their choice.

</p>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}




        </section>

      </main>
      
<div className='w-full flex justify-center flex-col xl:mb-[550px] mb-[500px] items-center relative'>
<img src={line} alt="" className='w-full z-30'/>
<img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
<main className='md:w-[90%] xl:w-[90%] w-[95%]  width-DAO  absolute md:top-40 top-20 lg:top-50 z-30 '>
        <div className='w-full flex justify-center'>
                
<h1 className='text-5xl  lg:text-[55px] lg:w-[65%] font-medium text-center  leading-18  z-30'>Level up with Metax Digital</h1>
        </div>
<div className='w-full flex justify-center'>
    
<p className='opacity-[0.7] font-light leading-8 w-[90%]  lg:w-[45%] text-center py-10 '> Experience borderless banking that sends your transactions to banking partners and connects you to the Tradfi world and network liquidity providers.

</p>
</div>
<div className='text-center'><button className='w-[250px] py-4 rounded-full bg-btnBg font-light hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>
<main className='w-[95%] md:[90%] width-DAO xl:w-full pb-28 xl:mb-32'>
<div className='flex justify-center w-full'>
        
<section className=' grid lg:grid-cols-3 w-[95%] md:w-[90%]  grid-cols-1 flex-wrap gap-10'>
        
        {/* div 1 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <h2 className='text-2xl font-medium'>
    Buy your assets with Metax Digital
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>
     Execute payments worldwide in EUR, USD, CHF, SGD, GBP, DKK or SEK with any major stablecoin.
     Or use our <span className='font-semibold text-white'>On-ramp feature</span> to convert fiat currencies into crypto.</p>
     
             </div>
             {/* div 2 */}
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <h2 className='text-2xl font-medium'>
     Virtual Accounts

     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Create e-money accounts in GBP and EUR, and send and receive payments with SEPA, CHAPs, and Faster Payments.</p>
     
             </div>
      {/* div 3 */}
             <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <h2 className='text-2xl font-medium'>
     Loans
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Providing web3 businesses and their founders access to specialized loan solutions and factoring.</p>
     
             </div>
      
        
        
    {/* div 4 */}



{/* div 4 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <h2 className='text-2xl font-bold'>
     Crypto Payments
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Process batched crypto payments hassle-free, perfect for payroll and more</p>
     
             </div>
             {/* div 5 */}
             <div className='p-7 pb-10 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1A2436] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
     <h2 className='text-2xl font-medium'>
     OTC Trades
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Access to trades and payments using any token and into any fiat currency or vice-versa.</p>
     
             </div>
      {/* div 6 */}
             <div className='p-7 pb-10 xl:h-[240px]  rounded-2xl border-[#1A2436] border-[1px] flex flex-col gap-3' style={{backgroundImage:"linear-gradient(to top,#1F3994 2%,#030713)"}}>
      
     <h2 className='text-2xl font-medium'>
     Payables & Invoice Me
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Send custom invoice links, track and approve payables, batch payments, and upload or forward invoices for seamless financial management in crypto or fiat.</p>
     
             </div>
      
        
        {/* div 7 */}
        <div className='p-7 xl:h-[240px] rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
     <h2 className='text-2xl font-medium'>
     Tokenised Securities
     </h2>
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Aimed at treasury management, we aim to provide our clients with safe fix-income products like tokenised T-bills and money market funds.</p>
     
             </div>
             {/* div 8 */}
             <div className='p-7 xl:h-[240px]  rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                 <h2 className='text-2xl font-medium'>
     Compliant Privacy
     </h2>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg border-[1px] text-center border-border '><span className='gradientText'>Coming soon</span> </p></div>
    
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Swiss banking privacy applied to all your crypto and fiat transactions in a compliant manner.</p>
     
             </div> 
      {/* div 9 */}
             <div className='p-7 xl:h-[240px]  rounded-2xl flex flex-col gap-3 border-[#1D212A] border-[1px]' style={{backgroundColor:"#0C101A"}}>
                 <div className='flex justify-between items-center'>
                 <h2 className='text-2xl font-medium'>
     Cards
     </h2>
     <p className='text-v3 text-[13px] font-semibold bg-[#161C29] py-2 px-3 rounded-lg border-[1px] border-border '><span className='gradientText'>Coming soon</span> </p></div>
    
     <p className='text-[rgba(243,243,243,0.8)] text-sm font-light w-[91%] pb-3 pt-5'>Physical or virtual debit cards in either EUR or GBP that interact flawlessly with your non-custodial wallets.</p>
     
             </div> 
        
        
     
     
             </section>
</div>
</main>
    </div>
  )
}

export default UltraHigh
