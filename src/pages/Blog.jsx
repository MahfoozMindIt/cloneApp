import React from 'react';
import "../styles/Blog.css";
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'
import blog6 from '../assets/blog6.png'
import { CiCalendar } from 'react-icons/ci';
import MetaData from '../components/Metadata';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blog=[{
    id:1,
    img:blog1,
    h1:"A year of regulatory changes in Europe",
    p:"Starting 2025, Metax Digital is focused on keeping up to date with regulatory changes, and ensuring compliance.",
    date:"November 13, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  },{id:2,
    img:blog2,
    h1:"10 luxury items you can buy with crypto",
    p:"The world of luxury items is embracing the new Web3 economy, allowing crypto holders to access a brand new set of assets.",
    date:"January 20, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  },{id:3,
    img:blog3,
    h1:"DeFi loans: connecting traditional finance with crypto",
    p:"Metax Digital now enables aggregated DeFi loans within its platform.",
    date:"February 19, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  },{id:4,
    img:blog4,
    h1:"Crypto payments: how close are we to mass adoption?",
    p:"Metax Digital was part of the European Blockchain Convention and has collected some views on the crypto payments future.",
    date:"October 13, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  },{id:5,
    img:blog5,
    h1:"Investing in Real Estate: 10 reasons to use crypto to acquire a property",
    p:"As real estate becomes a more attractive investment option, crypto is rapidly gaining acceptance as a payment method.",
    date:"December 12, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  },{id:6,
    img:blog6,
    h1:"Tokenized Securities vs Prudential Regulated Assets: Diversify your Web3 Treasury",
    p:"As the demand for on-chain products increases, Web3 enterprises have new opportunities to diversify their asset portfolio.",
    date:"March 29, 2024",
    link:"/how-to-manage-a-fully-decentralized-operation"
  }]
  return (
      <div className='w-full flex justify-center '>
       <main className='md:w-[90%] xl:w-[85%] w-[95%] width-contact formContact flex justify-center flex-col items-center'>
       <div className='w-full  py-20 banner'><h1 className='lg:text-6xl xl:text-7xl md:text-5xl text-4xl font-semibold text-center  z-30 pt-10'>Discover the latest news</h1>
       <p className='text-[grey] text-center lg:text-lg py-10'>Learn about Metax Digital and how we are changing <br className='hidden md:block'/> the money markets for digital assets.</p></div>

{/* Blogs */}


<div className='grid xl:grid-cols-3 grid-cols-1 gap-14 md:grid-cols-2 py-32'>
<MetaData metaData={'Metax Digital | Blog'}/>
{blog && blog.map((x)=>(
<Link to={x.link} key={x.id}>
<img src={x.img} alt="" className='border-[1px] border-border rounded-2xl mb-5'/>
<div className='bg-[#09122E] px-5 py-1 w-fit rounded-md border-[1px] border-btnBg'><p className='text-[13px] font-medium'>ARTICLES</p></div>
<h2 className='py-5 text-2xl  font-medium'>{x.h1}</h2>
<p className='text-[grey] h-[70px] text-[15px] mb-5'>{x.p}
</p>
<div className='flex gap-3 items-center text-[grey]'><span className='text-xl'><CiCalendar/>
</span><p>{x.date}</p></div>
</Link>
))}</div>

       </main></div>
  )
}

export default Blog
