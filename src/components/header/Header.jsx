import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  return (
    <section className='w-full justify-center flex py-5'>
      <nav className='flex w-[90%] justify-between'>
        <h1 className='text-2xl font-bold'>Metax</h1>

        <div className=' gap-10 hidden lg:flex items-center'>
        <ul className='flex gap-10 font-semibold text-[15px]'>
<li>Home</li>
<li className='flex items-center gap-2'>Use cases <FaAngleDown/></li>
<li>Blog</li>
<li>Contact us</li>
        </ul>
        <div className='flex gap-3'>
          
<button className='bg-hoverBg py-2 px-5 rounded-full'>Sign up</button>
<button className='bg-btnBg py-2 px-5 rounded-full'>Sign in</button>
        </div>
        </div>
        <div className='p-3 rounded-full bg-white text-black lg:hidden'>
<IoMenuSharp/>
        </div>
      </nav>
    </section>
  )
}

export default Header
