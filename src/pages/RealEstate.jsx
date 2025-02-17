import React from 'react'
import "../styles/Home.css"
import "../styles/RealEstate.css"
import rea from '../assets/rea.avif'
import bg1 from '../assets/realbg1.svg'
import r1 from '../assets/r1.svg'
import r2 from '../assets/r2.svg'
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosCard, IoMdCheckmark, IoMdLock } from 'react-icons/io';
import { TbSunFilled } from 'react-icons/tb'
import { PiBankFill, PiLightbulbFilamentFill } from 'react-icons/pi'
import { GrCompliance } from 'react-icons/gr'


const RealEstate = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center relative'>
      <img src={bg1} alt="" className='h-screen w-[100%] absolute -top-[120px] z-10'/>
          <div className=' w-full h-screen flex justify-center flex-col items-center realEstateBanner z-30'>
          <h1 className='lg:text-7xl md:text-5xl text-4xl text-center font-semibold'>
          Buy your <span className='text-btnBg'>Next Pr</span><span className='text-v3'>operty</span>
          <br />
          with 
          <span className='text-btnBg'> Cry</span><span className='text-v3'>pto</span>
          </h1>
          <p className='text-center md:text-[19px] text-[17px] pt-10'>Invest in real estate using Skyline Digital's crypto payments platform
          </p>
      <div className='flex justify-center gap-5 pt-10'>
      <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
      <button className='w-[210px] py-3 rounded-full bg-hoverBg font-semibold hover:bg-btnBg cursor-pointer'>Book a free call</button>
      </div>
       <div className='xl:pt-16 pt-10 text-md animate-ping '>
                    <IoIosArrowDown />
                    <IoIosArrowDown />
                </div>
      </div>
    <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col'>
    
      <section className=' flex w-full justify-center flex-col items-center z-30 pt-28 xl:pt-44'>
    
    



           {/* ......................... Enhanced Functionality    section   starts ................. */}
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center w-full py-20'>

<div className='lg:w-[48%] w-full'>
      <h2 className='lg:text-6xl text-5xl font-semibold leading-18'>
      Buy real estate in +30 <br className='hidden lg:block '/> countries
      </h2>
   

<p className='text-[grey]  xl:w-[80%] py-10'>
The European Union market benefits from a strong financial infrastructure and growing crypto hubs, namely in Portugal, Estonia, and Germany, where progressive regulations support a crypto-friendly approach. This makes property investment more accessible for digital asset holders, positioning EU as a prime region for portfolio diversification.
</p>
<p className='text-[grey] xl:w-[80%]'>
Additionally, countries like Spain and Greece offer attractive Golden Visa programs, granting residency to investors. Spain's Golden Visa requires a minimum investment of €500,000, while Greece’s offers entry with €250,000, making these countries even more appealing to international investors looking for both real estate gains and residency benefits.
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
<h1 className='text-center md:text-6xl text-5xl font-semibold'>Why choose Skyline Digital</h1>
<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20'>



      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4 '>
                  <TbSunFilled className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>State of the Art platform</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Our platform allows you to integrate with new technologies and DeFi tools while maintaining flexibility to hold, liquidate, swap, or employ your assets for real-world purchases within the Skyline universe of top-notch features.</p>
                
        </div>
      </div>
      
      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4'>
               <RiCustomerService2Line className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>24/7 Support</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>For any inquiries, technical assistance, or real-time market insights, our dedicated support team is ready to provide unwavering assistance, ensuring you are well-equipped to navigate the complexities of the crypto landscape.</p>
                
        </div>
      </div>
      
      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4'>
              <PiLightbulbFilamentFill className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>All-in-one Solution</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Access a wide range of crypto features that can streamline your payment needs and extend your financial horizon with traditional financial services such as worldwide payments, tokenized securities, loans, and cards.</p>
                
        </div>
      </div>
      
      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4'>
                  <IoMdLock className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>Privacy and Safety</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>In addition to the self-custodial framework, our platform allows for secure wallet integration, including Ledger, SAFE, and Metamask, which is designed to safeguard private keys and protect against unauthorized access.</p>
                
        </div>
      </div>
      
      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4 '>
                  <GrCompliance className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>Transparency and Compliance</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>We are committed to rigorous regulatory standards, encompassing tax implications, anti-money laundering (AML), know-your-customer (KYC), and know-your-business (KYB) regulations.</p>
                
        </div>
      </div>
      
      <div className='bg-card p-5 border-border border-[1px] flex flex-col justify-center items-center lg:flex-row lg:items-center gap-10  rounded-2xl'>

            <div className='bg-btnBg w-fit rounded-2xl p-4 '>
                  <PiBankFill className='text-6xl'/>
            </div>
      <div>
                
                <h1 className='text-2xl font-semibold py-5'>The future of Banking solutions</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>We are working on new features to provide users with all the tools they need for their banking requirements, such as loans and physical cards, within our unique platform.

</p>
                
        </div>
      </div>
    

</div>
</section>
{/* ........ A solution for different cases section ends ...................  */}

      </section>

    </main>
    
<div className='w-full flex justify-center lg:justify-end'>
<main className='md:w-[90%] xl:w-[93%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col'>
<section className='flex flex-col gap-10 lg:flex-row justify-between items-center defi w-full py-20'>

<div className='lg:w-[48%] w-full'>
      <h2 className='lg:text-6xl text-5xl font-semibold leading-18'>
      Buy a property with <br className='hidden lg:block '/> a DeFi Loan
      </h2>
   

<p className='text-[grey]  xl:w-[80%] py-10'>Obtain aggregated DeFi loans through Skyline's platform. Our streamlined KYC/KYB simplifies access to DeFi lending protocols, such as Aave and Spark.
</p>
<p className='text-[grey] xl:w-[80%]'>
This feature is ideal for businesses and individuals looking to leverage liquidity without having to spend their crypto. Benefit from lower interest rates, flexible terms and no intermediaries as you will directly interact with the DeFi protocols
</p>
</div>


<div className='lg:w-[48%] w-full'>
<div className=' w-full h-[700px] '>
<img src={rea} alt="" className='object-cover w-full h-full rounded-l-2xl border-l-[#181F2F] border-[1px] border-r-0 border-b-0 border-t-0'/>
</div>
</div>

</section>
      </main>
  
</div>



<div className='w-full flex justify-center bg-white rounded-4xl'>
<main className='md:w-[80%] lgw-[80%] xl:w-[75%] w-[95%] flex justify-center'>
<section className='  w-full py-28'>

<h1 className='text-center md:text-6xl text-4xl font-medium text-black'>Why partner with us</h1>
<div className='grid grid-cols-1 w-full gap-16 pt-20'>
      <div className='rounded-2xl border-[1px] border-[silver] flex lg:flex-row flex-col justify-center gap-10 items-center bg-[whitesmoke] text-black p-10 md:p-20'>
            <div className=''>
                  <span className='text-btnBg font-semibold text-4xl'>0<span className='text-v3'>1</span></span>
                  <h2 className='text-4xl font-medium py-10'>For Agents</h2>
                  <p className='text-[grey]'>Close more deals with your crypto clients, earn more fees, and eliminate the need for traditional intermediaries, while guaranteeing a level of security, efficiency, and global reach.</p>
            </div>
            <img src={r1} alt="" />

      </div>
      <div className='rounded-2xl border-[1px] border-[silver] flex lg:flex-row flex-col justify-center gap-10 items-center bg-[whitesmoke] text-black p-10 md:p-20'>
            <div className=''>
                  <span className='text-btnBg font-semibold text-4xl'>0<span className='text-v3'>2</span></span>
                  <h2 className='text-4xl font-medium py-10'>For Investors</h2>
                  <p className='text-[grey]'>Secure global transactions with minimal friction while ensuring your data privacy, deal transparency, and efficiency in all your real estate investments.</p>
            </div>
            <img src={r2} alt="" />

      </div>

</div>

</section>
      </main>
  
</div>

<div className='w-full flex justify-center'>
<main className='md:w-[80%] lgw-[90%] xl:w-[85%] w-[95%] flex justify-center'>
<section className='  w-full py-28'>
<div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-16 pt-20'>
      <div className='rounded-2xl border-[1px] border-border p-10 md:p-20 grid1'>
           <h2 className='text-5xl'>Level up with Skyline Digital</h2>
<p className='py-10'>
Join Skyline Digital's all-in-one solution, which empowers underbanked Web3 Businesses, Founders, and DAOs to access third-party fiat payments, OTC trades, tokenized securities, vIBANs, on/off-ramping, and loans.
</p>
<div className='flex gap-5'>
      <button className='w-[180px] py-3 rounded-full bg-white text-btnBg  hover:bg-hoverBg hover:text-white cursor-pointer'>Book a call</button>
      <button className='w-[210px] py-3 rounded-full bg-white text-btnBg  hover:bg-hoverBg hover:text-white cursor-pointer'>Join our platform</button>
      </div>
      </div>

      <div className='rounded-2xl border-[1px] border-border p-10 md:p-20 grid2'>
      <h2 className='text-5xl'>How to join</h2>
<h3 className='text-2xl pt-7 pb-5'>As an Individual</h3>
<main className='flex md:flex-row flex-col gap-5 justify-between items-center pb-10'>
<section className='flex flex-col gap-3'>
<div className='flex items-center gap-5'>
      <span className='bg-white text-[#0c101aa6]  rounded-full font-semibold h-6 w-6 flex justify-center items-center'>1</span>
      <p className='text-[14px] text-[grey]'>Click <span className='text-white font-semibold'>“Sign Up”</span> to begin</p>
</div>
<div className='flex items-center gap-5'>
      <span className='bg-white text-[#0c101aa6]  rounded-full font-semibold h-6 w-6 flex justify-center items-center'>2</span>
      <p className='text-[14px] text-[grey]'>Complete the onboarding process</p>
</div>
<div className='flex items-center gap-5'>
      <span className='bg-white text-[#0c101aa6]  rounded-full font-semibold h-6 w-6 flex justify-center items-center'>3</span>
      <p className='text-[14px] text-[grey]'>Start using Skyline Digital!</p>
</div>
</section>
<button className='w-[180px] py-3 rounded-full bg-white text-btnBg  hover:bg-hoverBg hover:text-white cursor-pointer'>Sign Up</button>
      
      </main>
      <hr 
  className="h-1 w-full rounded border-0" 
  style={{ backgroundImage: "linear-gradient(to right, #316BC7, #4FC0FF)" }} 
/>
<h3 className='text-2xl pt-5 pb-3'>As an Partner</h3>
<main className='flex md:flex-row flex-col gap-5 justify-between items-center pb-10'>
<section className='flex flex-col gap-3'>
<div className='flex items-center gap-5'>
      <span className='bg-white text-[#0c101aa6]  rounded-full font-semibold h-6 px-2 flex justify-center items-center'>1</span>
      <p className='text-[14px] text-[grey]'>Click <span className='text-white font-semibold'>“Book a call”</span> to get started, then select a date and time on the Calendly calendar to confirm your appointment.</p>
</div>
</section>
<button className='w-[180px] py-3 rounded-full bg-white text-btnBg  hover:bg-hoverBg hover:text-white cursor-pointer'>Book a call</button>
      
      </main>
      </div>

</div>

</section>
      </main>
  
</div>

  </div>
  )
}

export default RealEstate
