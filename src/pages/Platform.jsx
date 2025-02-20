import React from 'react'
import "../styles/Home.css"
import "../styles/Platform.css"
import BgImg from '../assets/bgImg.svg'
import n1 from '../assets/n1.svg'
import n2 from '../assets/n2.svg'
import n3 from '../assets/n3.svg'
import n4 from '../assets/n4.svg'
import n5 from '../assets/n5.svg'
import a1 from '../assets/a1.svg'
import a2 from '../assets/a2.svg'
import a3 from '../assets/a3.svg'
import a4 from '../assets/a4.svg'
import a5 from '../assets/a5.svg'
import { IoIosArrowDown, IoIosCard } from 'react-icons/io';
import line from '../assets/curveline.svg';
import { MdAccountTree, MdOutlineCompareArrows, MdOutlinePrivacyTip } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa6'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { GiTwoCoins } from 'react-icons/gi'
import { AiOutlineGlobal } from 'react-icons/ai'

const Platform = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#000205 30%,#010102 )"}}>
         <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
           {/* banner section..... */}
   <img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
           <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-40'>
   
           <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
               <h1 className='lg:text-7xl md:text-5xl text-4xl text-center font-medium'>Access new features<br /> for your Platform
               </h1>
               <p className='text-center md:text-[17px] text-[15px]'>Add more value to your customers through Metax’s crypto to fiat payments</p>
               <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Learn more</button>
           </div>
           <div className='xl:pt-16 pt-10 text-md animate-ping '>
               <IoIosArrowDown />
               <IoIosArrowDown />
           </div>
   
   
   
           {/* ......................... Enhanced Functionality    section   starts ..............
   
   
   
   {/* ........Create your (Ultra) High Net-Worth account now ................... */}
   <section className='pb-20 pt-80 w-full'>
   <h1 className='xl:text-6xl  md:text-4xl text-4xl text-center font-medium xl:leading-18 md:leading-14 leading-10'>Enable worldwide<br className='hidden md:block'/>Offramping in your<br className='hidden md:block'/>platform</h1>
   
   
   <main className='grid grid-cols-1 gap-10 pt-20'>
   
   <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
   <main className='xl:h-[420px] border-border border-[1px] bg-card  rounded-4xl'>
               
               <img src={a1} alt="" className='w-full'/>
           <div className= 'p-7  px-5 pt-5'>
                   
                   <h1 className='text-xl font-semibold py-5'>Invoicing and Accounts Payables</h1>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Streamline your financial operations with our professional invoices, and accounts payables solution by tracking and managing your payments within one platform.
   
   </p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-border border-[1px] bg-card rounded-4xl'>
               
               <img src={a2} alt="" className='w-full'/>
           <div className= 'p-7 px-5 pt-5 '>
                   
                   <h1 className='text-xl font-semibold py-5'>OTC Custom Service
                   </h1>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Your organization can access end-to-end white glove and private solutions for any needs you may have - “you find a problem, we fix it”.
   
   </p>
                   
           </div>
           </main>
   </div>
       
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
           <main className='xl:h-[420px]  border-border border-[1px] bg-card rounded-4xl'>
               <img src={a3} alt="" className='w-full'/>
           <div className= 'p-7   px-5 pt-5'>
                   
                   <h1 className='text-xl font-semibold py-5'>Full-Spectrum of Crypto Services
                   </h1>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>From secure wallet integrations to efficient crypto accounting, experience comprehensive support for all your transactions and business needs.
   
   </p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-border border-[1px] bg-card  rounded-4xl'>
               
               <img src={a5} alt="" className='w-full'/>
           <div className= 'p-7  px-5 pt-5'>
                   
                   <h1 className='text-xl font-semibold py-5'>Innovative Payment Solutions
                   </h1>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Upgrade your operations with our cutting-edge payment rails and processing solutions that allow you to execute payments worldwide in fiat currencies with any major stablecoin.</p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-border border-[1px] bg-card rounded-4xl Grid1'>
               
           <div className= 'p-7 px-5 pt-5'>
                   
                   <h1 className='text-2xl font-semibold py-5'>Integrate the API!</h1>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px]  pb-14'>Integrate our API to enable seamless worldwide offramping on your platform. Empower users to efficiently process transactions and access funds globally.
   
   
   
   </p>
   <button className='w-[180px] py-3 rounded-full bg-white text-btnBg hover:text-white hover:bg-hoverBg cursor-pointer'>Integrate now</button>
          
                   
           </div>
           </main>
   
   </div>
   </main>
   
   </section>
   {/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}
   
   
   
   

 
   
   
   
           </section>
   
         </main>
         
   <div className='w-full flex justify-center flex-col mb-[100px] items-center relative'>
   <img src={line} alt="" className='w-full z-30'/>
   <img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
   <main className='md:w-[90%] xl:w-[85%] w-[95%]    absolute md:top-40 top-20 lg:top-50 z-30 '>
   <h1 className=' md:text-5xl text-4xl font-semibold text-center  z-30'>Revolutionize Payments</h1>
   <h2 className=' md:text-4xl text-2xl font-medium text-center  z-30 pt-5'>Now allowing 3rd Party Payments directly from your platform</h2>
   <div className='w-full flex flex-col items-center justify-center'>
       
   <p className='text-[grey] text-center py-7 pt-10 md:w-[60%]'> With comprehensive support for payments, receivers, and bank accounts. Provide your customers with an all-in-one retail experience, seamlessly combining Offramping and 3rd Party Payments within a single platform.


   
   </p>
   <p className='text-[grey] text-center pt-3 pb-7 pb-10 md:w-[60%]'>
   <span className='font-semibold'>Only with Metax Digital</span> can you allow your customers to pay anyone, anywhere in the world.
   </p>
   </div>
   <div className='text-center'><button className='w-[220px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>

   
   </main>
   <main className='md:w-[90%] xl:w-[85%] w-[95%] mt-[650px]'>
      
   {/* ........Create your (Ultra) High Net-Worth account now ................... */}
   <section className='py-20 w-full'>
       <p className=' pb-5 text-xl'><span className='text-btnBg'>Nex</span><span className='text-v3 '>t ste</span> 
       <span className='text-v4'>ps</span></p>
   <h1 className='xl:text-6xl  md:text-4xl text-4xl  font-medium xl:leading-18 md:leading-14 leading-10'>How can you integrate our API?</h1>
   <p className='text-[grey] pt-5 lg:pt-10'>Pay invoices for goods and services, raise capital from traditional investors, and streamline payroll. With our Crypto to Fiat feature, ensure smooth employee payments in their preferred currency or facilitate crypto to crypto transactions.</p>
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
           <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                   
           <div className='flex items-center gap-5'>
                    <div className='text-black bg-white h-5 w-5 rounded-full flex justify-center items-center font-semibold'>1</div>
                    
                   <h1 className='text-2xl font-semibold py-5'>Signup/Onboard</h1>
                   </div>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Choose how you want to onboard: Use our iframe on your website or app, or contact us for a custom solution tailored to your needs.</p>
                   
           </div>
           <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
           <div className='flex items-center gap-5'>
                    <div className='text-black bg-white h-5 w-5 rounded-full flex justify-center items-center font-semibold'>2</div>
                    
                   <h1 className='text-2xl font-semibold py-5'>Obtain your API key</h1>
                   </div>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Once onboarded, receive your API key easily through our platform or via API.</p>
                   
           </div>
           <div className= 'p-7 xl:h-[240px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                   <div className='flex items-center gap-5'>
                    <div className='text-black bg-white h-5 w-5 rounded-full flex justify-center items-center font-semibold'>3</div>
                    
                   <h1 className='text-2xl font-semibold py-5'>Transaction flow</h1>
                   </div>
                   <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Initiate transactions via API within your website or app or, alternatively, direct your customers to the Metax Digital platform.
   
   </p>
                   
           </div>
   
   </div>
   </section>
   {/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}
   
   </main>
   </div>
   
       </div>
  )
}

export default Platform
