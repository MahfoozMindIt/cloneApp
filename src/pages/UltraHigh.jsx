import React from 'react'
import "../styles/Home.css"
import BgImg from '../assets/bgImg.svg'
import { Link } from 'react-router-dom'
import section2 from '../assets/section2.svg'
import section4 from '../assets/section4.svg'
import section3 from '../assets/section3.png'
import section5 from '../assets/section5.svg'
import { IoIosArrowDown } from 'react-icons/io';
import line from '../assets/curveline.svg';
const UltraHigh = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center' style={{backgroundImage:" radial-gradient(#000205 30%,#010102 )"}}>
      <main className='md:w-[90%] xl:w-[85%] w-[95%]  z-30 flex pb-5 md:pb-15 lg:pb-20 items-center flex-col relative'>
        {/* banner section..... */}
<img src={BgImg} alt="" className='absolute xl:top-50 top-72 z-10' />
        <section className=' flex w-full justify-center flex-col items-center z-30 pt-20 xl:pt-44'>

        <div className='flex flex-col items-center pb-10 xl:pb-0 gap-10 pt-10'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl text-center font-medium'>Bridging Traditional <br /> Finance & Crypto
            </h1>
            <p className='text-center md:text-[17px] text-[15px]'>Metax Digital offers a solution that allows Ultra and High Net-Worth Individuals to manage <br className='hidden md:block'/> their assets in a unique platform with Swiss banking-style service</p>
            <button className='w-[180px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer'>Join now</button>
        </div>
        <div className='xl:pt-16 pt-10 text-md animate-ping '>
            <IoIosArrowDown />
            <IoIosArrowDown />
        </div>


             {/* ......................... Enhanced Functionality    section   starts ................. */}
<section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-52 xl:pt-72'>

<div className='lg:w-[48%] w-full'>
<span className='text-btnBg text-md md:text-2xl leading-18'>Banking an</span><span className='text-v3 text-md md:text-2xl '>d Paym</span><span className='text-v4 text-md md:text-2xl'>ent Solutions</span> 
        <h2 className='lg:text-7xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
        TradFi and DeFi in <br className='hidden lg:block '/> one place

        </h2>

<p className='text-[silver] pt-5'>
Extend your financial horizon with traditional banking services such as <br className='hidden lg:block '/>worldwide payments, tokenized securities, loans, and cards.
</p>
</div>


<div className='lg:w-[48%] flex lg:justify-end w-full'>
<img src={section2} alt="" />
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}

             {/* ......................... Enhanced Functionality    section   starts ................. */}
             <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>

             <div className='lg:w-[48%]  w-full'>
<img src={section3} alt="" />
</div>

<div className='lg:w-[48%] flex flex-col lg:items-end w-full'>
  <div>
  <div>
    <span className='text-btnBg text-md md:text-2xl leading-18'>Cryp</span><span className='text-v3 text-md md:text-2xl '>to ac</span><span className='text-v4 text-md md:text-2xl'>cessibility</span></div> 
        <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
        Skyline offers <br className='hidden lg:block '/>freedom of choice

        </h2>

<p className='text-[silver] pt-5'>Manage your crypto assets portfolio with no constraints! Our platform allows you to integrate with new technologies and DeFi tools while <br className='hidden lg:block '/>maintaining flexibility to liquidate, swap, or use your assets within the Skyline universe of banking top-notch features.
</p>
  </div>
</div>



</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}
        {/* ......................... Enhanced Functionality    section   starts ................. */}
        <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>

<div className='lg:w-[48%] w-full'>
<span className='text-btnBg text-md md:text-2xl leading-18'>Tokeni</span><span className='text-v3 text-md md:text-2xl '>sed s</span><span className='text-v4 text-md md:text-2xl'>ecurities</span> 
        <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
        Asset Diversification
        </h2>

<p className='text-[silver] pt-5'>Access Tokenised securities within our platform, granting you a more diverse asset holding.Increase your liquidity and
Access Tokenised securities within our platform, <br className='hidden lg:block'/> granting you a more diverse asset holding.Increase your liquidity and
</p>
</div>


<div className='lg:w-[48%] flex lg:justify-end w-full'>
<img src={section4} alt="" />
</div>

</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}


             {/* ......................... Enhanced Functionality    section   starts ................. */}
             <section className='flex flex-col gap-20 lg:flex-row justify-between items-center w-full py-20 pt-20'>

             <div className='lg:w-[48%]  w-full'>
<img src={section5} alt="" />
</div>

<div className='lg:w-[48%] flex flex-col lg:items-end w-full'>
  <div>
  <div>
    <span className='text-btnBg text-md md:text-2xl leading-18'>Safet</span><span className='text-v3 text-md md:text-2xl '>y F</span><span className='text-v4 text-md md:text-2xl'>irst</span></div> 
        <h2 className='lg:text-6xl md:text-5xl text-4xl font-medium md:leading-18 leading-10'>
        Privacy and safety<br className='hidden lg:block '/>for all users


        </h2>

<p className='text-[silver] pt-5'>Metax Digital is focused on ensuring all security measures are in place to safeguard your financial well-being. We work with many types of wallets and on-chain security tools. <br className='hidden lg:block '/>
</p>
  </div>
</div>



</section>
{/* ......................... Enhanced Functionality    section   ends ................. */}
        {/* ......................... Enhanced Functionality    section   starts ..............


{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
    <p className='text-center pb-5 text-xl'><span className='text-btnBg'>Use cases - U</span><span className='text-v3 '>nlock Finan</span> 
    <span className='text-v4'>cial Freedom</span></p>
<h1 className='lg:text-6xl md:text-5xl text-4xl text-center font-medium md:leading-18 leading-10'>Crypto Transactions made simple:<br className='hidden md:block'/>  Real world assets, Real estate, Legal <br className='hidden md:block'/>fees </h1>
<p className='text-[grey] text-center pt-5 lg:pt-10'>
Elevate your financial game! Buy cars, invest in real estate, and cover legal fees-all with cryptocurrency. Experience the <br className='hidden md:block'/>ease of digital transactions and step into a future of financial freedom</p>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Buy your assets with Metax Digital
                </h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Did you know you can buy virtually anything with our platform? One of our recent success stories involves a client who purchased a Tesla using Metax Digital!</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Explore crypto investment opportunities on Metax Digital’s platform</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Do you enjoy the freedom of investing with crypto? Choose from a variety of business investments and seamlessly apply them through our platform.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px]  border-border border-[1px] px-5 pt-5 rounded-2xl' style={{backgroundImage:"linear-gradient(to top,#1F3994 10%,#161E3A   )"}}>
                
                <h1 className='text-xl font-semibold py-5'>Diversify your investments with Metax Digital</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[14px] pb-3'>Are you looking to diversify your investment portfolio? Metax Digital offers a wide range of investment options, including Treasury bills for HNWI or Glo Dollar swaps to employ your money on a good cause: ending extreme poverty.

</p>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}



{/* ........Create your (Ultra) High Net-Worth account now ................... */}
<section className='py-20 w-full'>
<h1 className='lg:text-6xl md:text-5xl text-4xl text-center font-medium md:leading-18 leading-10'>Create your <span className='text-btnBg'>(Ultra) H</span><span className='text-v3 '>igh Net-Worth</span> <br className='hodden lg:block'/><span >account now</span>  </h1>
<p className='text-[grey] text-center pt-5 lg:pt-10'>Welcome to a world where financial excellence meets unparalleled opportunities!</p>
<div className='grid grid-cols-1 lg:grid-cols-5 gap-10 pt-20'>
        <div className= 'p-7 xl:h-[240px] bg-card border-border border-[1px] px-5 pt-5 rounded-2xl lg:col-span-3'>
                
                <h1 className='text-2xl font-semibold py-5'>Full banking services</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>You can also access crypto-to-crypto batch transactions, crypto-to-fiat payments, swaps, on-ramps, tokenized stocks, loans, cards, and much more.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] bg-card border-border border-[1px] px-5 pt-5 rounded-2xl lg:col-span-2'>
                
                <h1 className='text-2xl font-semibold py-5'>Elite networking</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Connect with like-minded individuals, industry leaders, and experts at our exclusive networking events.</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] bg-card border-border border-[1px] px-5 pt-5 rounded-2xl lg:col-span-2'>
                
                <h1 className='text-2xl font-semibold py-5'>Multiple users under one account</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>You can add multiple users in your account, such as Personal Assistants, CFOs, financial advisors, and accountants, with our viewer account’s option without allowing them to control your assets</p>
                
        </div>
        <div className= 'p-7 xl:h-[240px] bg-card border-border border-[1px] px-5 pt-5 rounded-2xl lg:col-span-3'>
                
                <h1 className='text-2xl font-semibold py-5'>For Platform Services</h1>
                <p className='text-[rgba(243,243,243,0.7)] text-[16px] pb-3'>Access more features and add more value to your customers through Metax Digital’s crypto to fiat and crypto to crypto payments.</p>
                
        </div>

</div>
</section>
{/* ........ Create your (Ultra) High Net-Worth account now ends ...................  */}

        </section>

      </main>
      
<div className='w-full flex justify-center flex-col xl:mb-[500px] lg:mb-[600px] md:mb-[800px] mb-[600px] items-center relative'>
<img src={line} alt="" className='w-full z-30'/>
<img src={BgImg} alt="" className='rotate-180 z-10 absolute top-0'/>
<main className='md:w-[90%] xl:w-[85%] w-[95%]    absolute md:top-40 top-20 lg:top-50 z-30 '>
<p className='text-center pb-5 text-xl'><span className='text-btnBg'>Enter the wor</span><span className='text-v3 '>ld of cry</span> 
<span className='text-v4'>pto markets</span></p>
<h1 className=' md:text-5xl text-4xl font-semibold text-center  z-30'>Tailored introduction to new<br className='hidden lg:block'/>possibilities</h1>
<div className='w-full flex justify-center'>
    
<p className='text-[grey] text-lg text-center py-10 md:w-[60%]'> Navigate the realms of traditional banking and crypto markets with expert and personalized guidance while ensuring your privacy. Whether you’re a seasoned investor or just starting to discover the financial possibilities of the Crypto world, you can get insights and full support from our experienced team.<br className='hidden lg:block'/> </p>
</div>
<div className='text-center'><button className='w-[220px] py-3 rounded-full bg-btnBg font-semibold hover:bg-hoverBg cursor-pointer text-center'>Join our Platform</button></div>
</main>

</div>

    </div>
  )
}

export default UltraHigh
