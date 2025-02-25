import React from 'react'
import "../styles/Home.css"
import "../styles/UltraHigh.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import section2 from '../assets/section2.svg'
import section4 from '../assets/section4.svg'
import section3 from '../assets/section3.png'
import section5 from '../assets/section5.svg'
import { IoIosArrowDown } from 'react-icons/io';
import line from '../assets/download1.svg';
const UltraHigh = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#000205 30%,#010102 )"}}>
      <main className='md:w-[90%] width xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col'>
       
        <section className=' flex w-full  justify-center flex-col items-center z-30'>

        <div className='flex flex-col backHero  items-center  gap-10 pt-24 lg:pt-44'>
            <h1 className='lg:text-7xl md:text-[55px] text-[40px] text-center w-[90%] md:w-full mainHeading  font-medium lg:w-[60%] lg:leading-24'>Bridging Traditional Finance & Crypto
            </h1>
            <p className='text-center font-light md:text-[16px] w-[80%] lg:w-[50%] md:w-full mainPara leading-7 text-[15px]'>Metax Digital offers a solution that allows Ultra and High Net-Worth Individuals to manage their assets in a unique platform with Swiss banking-style service</p>
            <button className='w-[350px] lg:w-[220px] py-4 rounded-full bg-btnBg font-medium hover:bg-hoverBg cursor-pointer'>Join now</button>
            <div className=' animate-ping pt-8'>
            <IoIosArrowDown className='text-[13px]'/>
            <IoIosArrowDown className='text-[13px]'/>
        </div>
        </div>
       


             {/* ......................... Tradfi and defi   section   starts ................. */}
<section className='flex flex-col gap-20 lg:flex-row justify-between pt-52 items-center w-full'>

<div className='lg:w-[48%] w-full md:w-[70%] flex flex-col justify-center lg:justify-start'>
<span className='lg:gradientText1 gradientText text-[22px] md:text-2xl text-center lg:text-start font-medium  leading-18'>Banking and Payment Solutions</span> 
        <h2 className='lg:text-[55px] lg:w-[70%] md:text-5xl  text-center text-[45px] lg:text-start font-medium md:leading-18 leading-16'>
        TradFi and DeFi in one  place

        </h2>

<p className='opacity-[0.7] md:leading-7 font-light pt-5 text-center leading-8 lg:text-start' >
Extend your financial horizon with traditional banking services such as <br className='hidden lg:block '/>worldwide payments, tokenized securities, loans, and cards.
</p>
</div>


<div className='lg:w-[48%] flex md:w-[70%] lg:justify-center w-full justify-center'>
<img src={section2} alt="" />
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}

             {/* ......................... Enhanced Functionality    section   starts ................. */}
             <section className='flex flex-col gap-20 lg:flex-row lg:gap-32 items-center w-full py-20 pt-28'>

             <div className='lg:w-[50%]  w-full'>
<img src={section3} alt="" />
</div>

<div className='lg:w-[35%] md:w-[70%] flex flex-col lg:items-end w-full'>
  <div>
  <div className='text-center lg:text-start'>
    <span className='text-btnBg text-center text-[23px] lg:text-[23px] lg:text-start text-md md:text-xl gradientText font-medium leading-18'>Crypto accessbility</span></div> 
        <h2 className='lg:text-6xl text-center lg:text-start text-5xl font-medium leading-16'>
        Metax offers freedom of choice

        </h2>

<p className='opacity-[0.7] font-light md:leading-7 lg:text-start leading-8 text-center pt-5'>Manage your crypto assets portfolio with no constraints! Our platform allows you to integrate with new technologies and DeFi tools while maintaining flexibility to liquidate, swap, or use your assets within the Skyline universe of banking top-notch features.
</p>
  </div>
</div>



</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}
        {/* ......................... Enhanced Functionality    section   starts ................. */}
        <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>

<div className='lg:w-[48%] md:w-[70%] flex flex-col items-center lg:items-start w-full'>
<span className='text-btnBg text-md md:text-2xl gradientText text-[23px] leading-18'>Tokenised securities</span> 
        <h2 className='lg:text-6xl text-5xl text-center lg:text-start font-medium leading-18'>
        Asset Diversification
        </h2>

<p className='opacity-[0.7] font-light md:leading-7 lg:w-[75%] leading-8 w-[90%] md:w-full text-center lg:text-start pt-5'>Access Tokenised securities within our platform, granting you a more diverse asset holding.Increase your liquidity and your digital trading options, and solidify your presence in the company exchange market.
</p>
</div>


<div className='lg:w-[48%] md:w-[70%] flex lg:justify-center w-full'>
<img src={section4} alt="" />
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}


             {/* ......................... Enhanced Functionality    section   starts ................. */}
             <section className='flex flex-col gap-20 lg:flex-row lg:gap-32 items-center w-full py-20 pt-20'>

             <div className='lg:w-[50%] md:w-[70%] flex justify-center  w-full'>
<img src={section5} alt="" />
</div>

<div className='lg:w-[35%] md:w-[70%] flex flex-col lg:items-end w-full'>
  <div>
  <div className='text-center lg:text-start'>
    <span className='text-btnBg text-md md:text-2xl text-[23px] gradientText font-medium leading-18'>Safety First</span></div> 
        <h2 className='lg:text-[55px] text-5xl lg:text-start text-center font-medium leading-18'>
        Privacy and safety for all users


        </h2>
<div className='w-full flex justify-center'>
        
<p className='opacity-[0.7] font-light md:leading-7 text-center lg:text-start leading-8 w-[95%] pt-5'>Metax Digital is focused on ensuring all security measures are in place to safeguard your financial well-being. We work with many types of wallets and on-chain security tools.
</p>
</div>
  </div>
</div>



</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}
        {/* ......................... Enhanced Functionality    section   starts ..............


{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>

    <p className='text-center pb-5 text-[23px] font-medium'><span className='gradientText'>Use cases - Unlock Financial Freedom</span></p>
<div className='w-full flex justify-center'>
<h1 className='lg:text-[55px] text-5xl text-center lg:w-[65%] font-medium leading-16 md:leading-18'>Crypto Transactions made simple: Real world assets, Real estate, Legal fees </h1>

</div>
<div className='w-full flex justify-center'>
<p className='opacity-[0.7] lg:w-[60%] font-light md:w-[90%]  md:leading-7 leading-8 w-[95%] text-center pt-5 lg:pt-10'>
Elevate your financial game! Buy cars, invest in real estate, and cover legal fees-all with cryptocurrency. Experience the ease of digital transactions and step into a future of financial freedom</p>

</div>
<div className=' md:grid-cols-1 hidden md:grid lg:grid-cols-3 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[260px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-2xl font-medium py-5'>Buy your assets with Metax Digital
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] md:w-[90%] text-[14px] pb-3'>Did you know you can buy virtually anything with our platform? One of our recent success stories involves a client who purchased a Tesla using Metax Digital!</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className=' text-2xl font-medium  py-5'>Explore crypto investment opportunities on Metax Digital’s platform</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] md:w-[90%] pb-3'>Do you enjoy the freedom of investing with crypto? Choose from a variety of business investments and seamlessly apply them through our platform.</p>
                
        </div>
        <div className= 'p-7 xl:h-[260px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-2xl font-medium py-5'>Diversify your investments with Metax Digital</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3 md:w-[90%]'>Are you looking to diversify your investment portfolio? Metax Digital offers a wide range of investment options, including Treasury bills for UHNWI or Glo Dollar swaps to employ your money on a good cause: ending extreme poverty.

</p>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}



{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>

<div className='flex justify-center w-full'>
<h1 className='lg:text-6xl text-5xl text-center font-medium leading-16 md:w-[95%] lg:w-[65%] '>Create your <span className='gradientText'>(Ultra) High Net-Worth </span>account now  </h1>

</div>

<p className='opacity-[0.7] font-light tracking-wide text-center leading-8 pt-10'>Welcome to a world where financial excellence meets unparalleled opportunities!</p>
<div className='md:grid hidden md:grid-cols-1 lg:grid-cols-5 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[240px]  bg-card border-[#2E333B] border-[1px] px-5 pt-5 rounded-2xl lg:col-span-3'>
                
                <h1 className='text-2xl font-semibold py-5'>Full banking services</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light md:w-[90%] lg:w-full leading-6 pb-3'>You can also access crypto-to-crypto batch transactions, crypto-to-fiat payments, swaps, on-ramps, tokenized stocks, loans, cards, and much more.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] bg-[#0C101A]  border-[#2E333B] border-[1px] px-5 pt-5 rounded-2xl lg:col-span-2'>
                
                <h1 className='text-2xl font-semibold py-5'>Elite networking</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light leading-6 pb-3'>Connect with like-minded individuals, industry leaders, and experts at our exclusive networking events.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] bg-[#0C101A] md:h-[280px] border-[#2E333B] border-[1px] px-5 pt-5 rounded-2xl lg:col-span-2'>
                
                <h1 className='text-2xl font-semibold py-5'>Multiple users under one account</h1>
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light md:w-[90%] lg:w-full leading-6 pb-3'>You can add multiple users in your account, such as Personal Assistants, CFOs, financial advisors, and accountants, with our viewer account’s option without allowing them to control your assets</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] lastGrid bg-[#0C101A] md:h-[280px] border-[#2E333B] border-[1px] px-5 pt-5 rounded-2xl lg:col-span-3 '>
                
            <div className='flex justify-between items-center p-5'>
            <div>
              <h1 className='text-4xl font-medium py-5'>How to Join</h1>
                <div className='flex gap-5'>
                        <div className='bg-white text-[#161E3A] text-sm  rounded-full h-6 w-6 flex justify-center items-center font-semibold '>1</div>
                        
                <p className='text-[rgba(243,243,243,0.8)] text-sm font-light leading-6 pb-3'>Click <span className='font-semibold text-white'>“Sign Up”</span> to begin</p>
                </div>

                <div className='flex gap-5'>
                        <div className='bg-white text-[#161E3A] text-sm xl:h-6 xl:w-6 h-6 w-6 lg:h-6 lg:w-8 flex justify-center items-center font-semibold ' style={{borderRadius:"100%"}}>2</div>
                        
                <p className='text-[rgba(243,243,243,0.)] text-sm font-light leading-6 pb-3'>Complete a brief profile to unlock a personalized experience</p>
                </div>
              </div>
              <button className='w-[150px] py-3 rounded-full bg-white text-btnBg hover:text-white font-light hover:bg-hoverBg cursor-pointer transition-all duration-300'>Sign Up</button>
            </div>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}

        </section>

      </main>
      
<div className='w-full flex justify-center flex-col xl:mb-[650px]  md:mb-[800px] mb-[850px] items-center relative'>
<img src={line} alt="" className='w-full z-30'/>
<img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
<main className='md:w-[90%] xl:w-[85%] w-[95%]    absolute md:top-40  top-20 lg:top-50 z-30 '>
<p className='text-center pb-5 text-xl'><span className='gradientText text-[23px] font-semibold'>Enter the world of crypto markets</span></p>
<div className='flex justify-center'>
<h1 className=' text-5xl  lg:text-[55px] lg:w-[65%] font-medium text-center  leading-18 mainHeading  z-30'>Tailored introduction to new possibilities</h1>

</div>
<div className='w-full flex justify-center'>
<p className='opacity-[0.7] font-light leading-8 w-[90%]  lg:w-[60%] text-center mainPara py-10 '> Navigate the realms of traditional banking and crypto markets with expert and personalized guidance while ensuring your privacy. Whether you’re a seasoned investor or just starting to discover the financial possibilities of the Crypto world, you can get insights and full support from our experienced team. </p>
    
</div>
<div className='text-center'><button className='w-[250px] py-4 rounded-full bg-btnBg font-light hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>

    </div>
  )
}

export default UltraHigh
