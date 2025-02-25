import React from 'react';
import '../styles/Blog1.css'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import { CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Blog1 = () => {
  return (
    <div className='relative h-[3900px] md:h-[3850px] lg:h-[3800px] bg-black z-[-2]' >

        <section className='bannerBg absolute left-0 z-0 -top-[80px] flex flex-col items-center justify-center h-[500px] w-full'>

<div className='flex items-center gap-5'><p className='text-sm font-semibold'>ARTICLES</p> <hr className='h-[1px] text-[grey] w-10'/> <p className='text-[grey] text-md'>March 15, 2024</p> </div>
<h1 className='lg:text-5xl text-4xl font-semibold text-center  z-30 pt-10'>How to manage a fully decentralized operations</h1>
        </section>
      <div className='absolute top-[420px] w-full'>
      <img src={blog1} alt="" className='w-full object-cover' />
      </div>

      <div className='absolute flex justify-center  w-full top-[750px] md:top-[950px] lg:top-[1700px]'>
<main className='w-[95%] md:w-[90%] xl:w-[85%]'>
<p className='font-semibold lg:w-[65%]'>Organizations around the world are exploring new ways to incorporate and manage businesses, especially within the Web3 community. A DAO is a new type of organization becoming increasingly attractive, as it can easily have a democratized governance model that fits its intended purposes.</p>

<p className='font-semibold pt-5 lg:w-[65%]'>
As Web3 rises, organizations tend to follow along with the decentralization of their own processes. Today, there are more than 13.000 DAOs across the globe, according to EY, which is over 3 times more than the official number in 2022, when there were around 4.000 DAOs.
‍
</p >

<h1 className='text-3xl font-semibold pt-10'>Introducing the DAO concept</h1>
<p className='text-[grey] pt-5 inline-block lg:w-[65%]'>
A DAO (Decentralized Autonomous Organization) is a blockchain-based structure created to manage a specific business, process, or project with clear goals and objectives. Within this model, several people can hold DAO tokens, which allows them to be involved in decision-making regarding voting rights or other advantages.
<br />
<br />
<br />

The first DAO was created on Ethereum in 2016 and was simply called The DAO. The goal was to raise investment from token holders in order to build a self-governing crowdfunding project on-chain. Despite raising more than 12.7M ETH, which is equivalent to $150M USD at the time, it failed to achieve its intended purpose, being ultimately dissolved.
<br />
<br />
<br />
From then on, the concept and its governance model have evolved, with multiple projects having been successful.
<br />
<br />
<br />
Since a DAO is, by concept, decentralized, the power is distributed among all voting members. This results in democratized access to DAOs ongoing operational decisions, instead of having the fate of the organization in the hands of one or multiple consulting boards. 
<br />
<br />
<br />
The goal of a DAO being on-chain is to give all members access to the decisions’ history, by recording them on the ledger, creating a very transparent culture and governance model.
<br />
<br />
<br />
With smart contracts at its core, governance rules are clearly written, making it easier to enforce them automatically and easily verifiable by all members. This ensures it is harder to make unilateral decisions or pursue personal interests at the expense of the greater good and community goal.
<br />
<br />
<br />
Having self-executing rules, a DAO does not need intermediaries to fulfill its purpose, such as external or administrative services, allowing it to streamline decisions, processes, and goals, thus making it a more efficient organizational structure.
</p>

<p className='py-20'>Want to learn more? Reach out to us on <span className='text-btnBg'>Telegram</span> and join us today!</p>

<div className='w-full'>
    <div className='w-full flex justify-between items-center pb-10'><h4 className='font-medium text-2xl md:text-3xl'>Related posts</h4>
    <Link to='/blog' className='md:w-[180px] w-[200px] py-3 flex justify-center items-center rounded-full bg-btnBg md:font-semibold text-sm hover:bg-hoverBg cursor-pointer'>Browse All Articles</Link></div>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
    <Link to='/how-to-manage-a-fully-decentralized-operation'>
<img src={blog2} alt="" className='border-[1px] border-border rounded-2xl mb-5'/>
<div className='bg-[#09122E] px-5 py-1 w-fit rounded-md border-[1px] border-btnBg'><p className='text-[13px] font-medium'>ARTICLES</p></div>
<h2 className='py-5 text-2xl  font-medium'>10 luxury items you can buy with crypto</h2>
<p className='text-[grey] h-[70px] text-[15px] mb-5'>The world of luxury items is embracing the new Web3 economy, allowing crypto holders to access a brand new set of assets.
</p>
<div className='flex gap-3 items-center text-[grey]'><span className='text-xl'><CiCalendar/>
</span><p>January 20, 2024</p></div>
</Link>
<Link to='/how-to-manage-a-fully-decentralized-operation'>
<img src={blog2} alt="" className='border-[1px] border-border rounded-2xl mb-5'/>
<div className='bg-[#09122E] px-5 py-1 w-fit rounded-md border-[1px] border-btnBg'><p className='text-[13px] font-medium'>ARTICLES</p></div>
<h2 className='py-5 text-2xl  font-medium'>10 luxury items you can buy with crypto</h2>
<p className='text-[grey] h-[70px] text-[15px] mb-5'>The world of luxury items is embracing the new Web3 economy, allowing crypto holders to access a brand new set of assets.
</p>
<div className='flex gap-3 items-center text-[grey]'><span className='text-xl'><CiCalendar/>
</span><p>January 20, 2024</p></div>
</Link>
    </div>
</div>

</main>
      </div>
    </div>
  )
}

export default Blog1
