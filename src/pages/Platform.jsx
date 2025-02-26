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
import line from '../assets/download1.svg';
import { MdAccountTree, MdOutlineCompareArrows, MdOutlinePrivacyTip } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa6'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { GiTwoCoins } from 'react-icons/gi'
import { AiOutlineGlobal } from 'react-icons/ai'

const Platform = () => {
  return (
    <div className='bg-white text-black'  style={{ backgroundImage: "linear-gradient(to top, whitesmoke 70%,white )" }}>
         <div className=' w-full flex flex-col text-black items-center justify-center' style={{backgroundImage:" linear-gradient(top 70%,#fff,#00020500 )"}}>
         <main className='md:w-[90%] xl:w-[90%] w-[95%] width-Platform  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
           {/* banner section..... */}
   <img src={BgImg} alt="" className='absolute xl:top-50 top-72 rotate-180 z-10' />
           <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-40'>
   
           <div className='flex flex-col  items-center pb-10 xl:pb-0 gap-10 pt-10'>
               <h1 className='lg:text-6xl xl:text-[75px] md:text-5xl text-4xl text-center xl:leading-24 lg:leading-20 font-medium'>Access new features<br className='hidden xl:block'/> for<br className='hidden lg:block xl:hidden'/> your Platform
               </h1>
               <p className='text-center md:text-[17px] text-[15px] opacity-[0.7] font-light'>Add more value to your customers through Metax’s crypto to fiat payments</p>
               <button className=' md:w-[320px] w-[220px] py-4 rounded-full bg-btnBg text-white font-light hover:bg-hoverBg cursor-pointer'>Learn more</button>
               
           <div className='xl:pt-16 pt-10 text-md animate-ping '>
               <IoIosArrowDown />
               <IoIosArrowDown />
           </div>
           </div>
   
   
   
           {/* ......................... Enhanced Functionality    section   starts ..............
   
   
   
   {/* ........Create your (Ultra) High Net-Worth account now ................... */}
   <section className='pb-20 pt-80 w-full'>
        <div className='w-full justify-center flex'>
                
   <h1 className='xl:text-[56px] lg:text-5xl lg:w-[75%] md:text-5xl text-4xl text-center font-medium xl:leading-18 md:leading-14 leading-10 xl:w-[45%]'>Enable worldwide Offramping in your platform</h1>
        </div>
   
   
   <main className='grid grid-cols-1 gap-10 pt-20'>
   
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
   <main className='xl:h-[420px] border-[silver] border-[1px] bg-white  rounded-4xl'>
               
               <img src={a1} alt="" className='w-full'/>
           <div className= 'p-7  px-5 pt-5'>
                   
                   <h1 className='text-2xl font-medium py-5'>Offramping to Fiat</h1>
                   <p className='opacity-[0.8] text-[14px] pb-3 font-light'>Efficient offramping solutions for your customers, integrated into your platform. Imagine offering offramping options directly in your wallet, supporting EUR, USD, and more.
   
   </p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-[silver] border-[1px] bg-white rounded-4xl'>
               
               <img src={a2} alt="" className='w-full'/>
           <div className= 'p-7 px-5 pt-5 '>
                   
                   <h1 className='text-2xl font-medium py-5 '>Integration Flexibility
                   </h1>
                   <p className='opacity-[0.8] text-[14px] pb-3 font-light'>Metax's payment tools blend into your platform, preserving the flow your customers love. Payments become a customizable feature, allowing you to tailor the experience based on your unique retail needs
   
   </p>
                   
           </div>
           </main>
   </div>
       
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
           <main className='xl:h-[420px]  border-[silver] border-[1px] bg-white rounded-4xl'>
               <img src={a3} alt="" className='w-full'/>
           <div className= 'p-7   px-5 pt-5'>
                   
                   <h1 className='text-2xl font-medium py-5'>Worldwide accessibility
                   </h1>
                   <p className='opacity-[0.8] text-[14px] pb-3 font-light'>We can onboard customers from all over the world and also offer worldwide transfers.
   
   </p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-[silver] border-[1px] bg-white  rounded-4xl'>
               
               <img src={a5} alt="" className='w-full'/>
           <div className= 'p-7  px-5 pt-5'>
                   
                   <h1 className='text-2xl font-medium py-5 '>Tailored Pricing Model
                   </h1>
                   <p className='opacity-[0.8] text-[14px] pb-3 font-light'>Choose a pricing model that suits your needs - whether it's a revenue share or a nominal fee.</p>
                   
           </div>
           </main>
           <main className='xl:h-[420px] border-[silver] border-[1px] bg-card rounded-4xl Grid1'>
               
           <div className= 'p-7 px-5 pt-5'>
                   
                   <h1 className='text-2xl font-medium text-white py-5'>Integrate the API!</h1>
                   <p className='text-[rgba(243,243,243,0.9)] text-[14px] font-light leading-6 pb-14'>Integrate our API to enable seamless worldwide offramping on your platform. Empower users to efficiently process transactions and access funds globally.
   
   
   
   </p>
   <button className='w-[180px] py-3 rounded-full bg-white text-btnBg  hover:text-white hover:bg-hoverBg cursor-pointer'>Integrate now</button>
          
                   
           </div>
           </main>
   
   </div>
   </main>
   
   </section>
   {/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}
   
   
   
   

 
   
   
   
           </section>
   
         </main>
         </div>
        
  <div className='w-full flex justify-center flex-col pb-[100px] bg-[whitesmoke] items-center relative' >
   <img src={line} alt="" className='w-full z-30'/>
   <main className='md:w-[90%] lg:w-[65%] xl:w-[90%] w-[95%] width-Platform   absolute md:top-40 top-20 lg:top-32 z-30 '>
   <h1 className=' md:text-5xl xl:text-[50px] text-4xl font-medium text-center  z-30'>Revolutionize Payments</h1>
   <h2 className=' md:text-4xl lg:text-[30px]  text-2xl lg:leading-12 font-medium text-center  z-30 pt-10'>Now allowing 3rd Party Payments directly from your platform</h2>
   <div className='w-full flex flex-col items-center justify-center'>
       
   <p className='opacity-[0.7] font-light text-center py-7 pt-10 leading-7 lg:w-[60%] md:w-[85%]'> With comprehensive support for payments, receivers, and bank accounts. Provide your customers with an all-in-one retail experience, seamlessly combining Offramping and 3rd Party Payments within a single platform.


   
   </p>
   <p className='opacity-[0.7] font-light text-center pt-3  pb-10 leading-7 lg:w-[60%] md:w-[85%]'>
   <span className='font-semibold'>Only with Metax Digital</span> can you allow your customers to pay anyone, anywhere in the world.
   </p>
   </div>

   
   </main>
   <main className='md:w-[90%] xl:w-[90%] w-[95%] width-Platform mt-[600px] lg:mt-[450px]'>
      
   {/* ........Create your (Ultra) High Net-Worth account now ................... */}
   <section className='py-20 w-full '>
       <p className=' pb-5 font-medium text-2xl lg:text-start text-center'><span className='Text'>Next steps</span></p>
   <div className='flex justify-center lg:justify-start'>
   <h1 className='xl:text-[55px]  md:text-5xl text-4xl md:w-[70%]  font-medium xl:leading-18 md:leading-14 leading-10 lg:text-start text-center'>How can you integrate our API?</h1>
   </div>
   <p className='opacity-[0.8] font-light pt-5 lg:pt-10 pb-10 lg:text-start text-center'>Pay invoices for goods and services, raise capital from traditional investors, and streamline payroll. With our Crypto to Fiat feature, ensure smooth employee payments in their preferred currency or facilitate crypto to crypto transactions.</p>
   <div className='flex justify-center lg:justify-start'>
        
<button className='lg:w-[140px] w-[140px] py-3 rounded-full text-[14px] lg:text-[16px] text-white bg-btnBg  hover:bg-hoverBg cursor-pointer'>API docs</button>
   </div>
   <div className='md:grid hidden grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
           <div className= 'p-7 xl:h-[240px] border-[silver] border-[1px] px-5 pt-5 rounded-2xl relative bg-white' >
                   
           <div className='flex items-center gap-5'>
                    
                   <h1 className='text-2xl font-medium py-5'>Signup/Onboard</h1>
                   </div>
                   <p className='opacity-[0.8] text-[14px] font-light leading-6 pb-3'>Choose how you want to onboard: Use our iframe on your website or app, or contact us for a custom solution tailored to your needs.</p>
                   <div className='text-9xl font-semibold absolute -right-1 top-5 lg:top-20'><span className='Text opacity-[0.4]'>1</span></div>   
           
                   
           </div>
           <div className= 'p-7 xl:h-[240px] border-[silver] border-[1px] px-5 pt-5 rounded-2xl relative bg-white' >
           <div className='flex items-center gap-5'>
                    
                   <h1 className='text-2xl font-medium py-5'>Obtain your API key</h1>
                   </div>
                   <p className='opacity-[0.8] text-[14px] font-light leading-6 pb-3'>Once onboarded, receive your API key easily through our platform or via API.</p>
                   <div className='text-9xl font-semibold absolute -right-1 top-5 lg:top-20'><span className='Text opacity-[0.4]'>2</span></div>   
           
                   
           </div>
           <div className= 'p-7 xl:h-[240px]  border-[silver] border-[1px] px-5 pt-5 rounded-2xl bg-white relative' >
                   <div className='flex items-center gap-5'>
                    
                   <h1 className='text-2xl font-medium py-5'>Transaction flow</h1>
                   </div>
                   <p className='opacity-[0.8] text-[14px] font-light leading-6 pb-3'>Initiate transactions via API within your website or app or, alternatively, direct your customers to the Metax Digital platform.
   
   </p>
                <div className='text-9xl font-semibold absolute -right-1 top-5 lg:top-20'><span className='Text opacity-[0.4]'>3</span></div>   
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
