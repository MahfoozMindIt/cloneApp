import React, { useState } from 'react';
import "./Header.css"
import "../../styles/Home.css"
import { FaAngleDown, FaBagShopping, FaPeopleGroup } from "react-icons/fa6";
import { IoMenuSharp, IoPerson } from "react-icons/io5";
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import logo from '../../assets/newFinal.png'
import { MdHome } from 'react-icons/md';
import { TbDeviceDesktopFilled } from 'react-icons/tb';
import Nav from './Nav';
import { RxCross2 } from 'react-icons/rx';
const Header = () => {
  const [fix,setFix]=useState(false);
  const [myNav,setMyNav]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const setFixed=()=>{
    if(window.scrollY>=90){
        setFix(true);
    }else{
        setFix(false);
    }
}

const nav=()=>{
  setMyNav(!myNav)
}

window.addEventListener('scroll',setFixed)

  return (
   <main>
     <section className={`${fix?'navbar fixed':'navbar'} z-[100] mainHeader  w-full  justify-center flex flex-col items-center py-5`}>
      <nav className='flex w-[90%] width   justify-between'>
        <Link to='/'>
        <img src={logo} alt="" className='w-48 object-contain'/></Link>

        <div className=' gap-10 hidden lg:flex items-center'>
        <ul className='flex gap-10 lg:text-[13px]  xl:text-[15px]'>
<li><Link to='/'>Home</Link></li> 
<li><Link to='/cards'>Cards</Link></li> 
 <li
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Use cases <FaAngleDown />
              {isOpen && (
                <div
                  className="bg-[#1B1F2F] absolute top-5 -right-[250px] w-[750px] z-50 p-3 rounded-2xl"
                  onMouseEnter={() => setIsOpen(true)}
                >
                  <p className='text-[silver] text-sm pb-5'>Our Use Cases</p>

                  <div className='grid grid-cols-2 gap-3 pb-3'>
                   <Link to='/ultra-high-net-worth-individual'> <div className='bg-[#02050D] hover:bg-[#393D4A] rounded-2xl p-5  flex flex-col gap-3'>
                      <div className='flex items-center gap-3 font-medium'>
                        
                      <IoPerson/>
                      <h2>Ultra High Net Worth Individual</h2>
                      </div>
                      <p className='text-[grey] text-[13px] font-light'>
                        Manage their assets in a unique platform with banking-style service.
                      </p>
                    </div></Link>

                    <Link to='/daos-and-organizations'><div className='bg-[#02050D] hover:bg-[#393D4A] rounded-2xl p-5  flex flex-col gap-3'>
                      <div className='flex items-center gap-3 font-medium'>
                        
                      <FaPeopleGroup/>
                      <h2>DAO's & Organizaitons</h2>
                      </div>
                      <p className='text-[grey] text-[13px] font-light'>
                        Allow companies and DAOs to pay for Goods Services, Contractors, and more
                      </p>
                    </div></Link>
                    

                  </div>
                  <div className='grid grid-cols-3 gap-3 pb-3'>
                  <Link to='/institutional'><div className='bg-[#02050D] hover:bg-[#393D4A] rounded-2xl p-5  flex flex-col gap-3'>
                      <div className='flex items-center gap-3 font-medium'>
                        
                      <FaBagShopping/>
                      <h2>Institutional</h2>
                      </div>
                      <p className='text-[grey] text-[13px] font-light'>
                        Help institutions redefine the landscape of challenges and opportunities
                      </p>
                    </div></Link>
                   <Link to='/real-estate'>
                   <div className='bg-[#02050D] hover:bg-[#393D4A] rounded-2xl p-5  flex flex-col gap-3'>
                      <div className='flex items-center gap-3 font-medium'>
                        
                      <MdHome/>
                      <h2>Real Estate</h2>
                      </div>
                      <p className='text-[grey] text-[13px] font-light'>
                      Invest in real estate using Metax Digital's crypto payments platform
                      </p>
                    </div>
                   </Link>
                   <Link to='/platform'> <div className='bg-[#02050D] hover:bg-[#393D4A] rounded-2xl p-5  flex flex-col gap-3'>
                      <div className='flex items-center gap-3 font-medium'>
                        
                      <TbDeviceDesktopFilled/>
                      <h2>Platform</h2>
                      </div>
                      <p className='text-[grey] text-[13px] font-light'>
                      Access more features and add more value to your customers
                      </p>
                    </div></Link>

                  </div>

                  <div className='bg-[#02050D] w-full text-sm flex justify-between p-3 items-center rounded-2xl'>
                    <p>The Future of Decentralized Banking</p>
                    <button className='flex items-center justify-center gap-2 cursor-pointer hover:bg-[#292D36] transition-all duration-200 bg-[#393D4A] py-1 px-3 rounded-full'>Get Started <GoArrowUpRight/></button>
                  </div>

                </div>
              )}
            
            </li>
<li><Link to='/blog'>Blog</Link></li>
<li><Link to='/contact'>Contact us</Link></li>
        </ul>
        <div className='flex gap-3'>
          
<button className='bg-hoverBg py-2 px-5 font-light hover:bg-btnBg transition-all duration-200 cursor-pointer rounded-full'>Sign up</button>
<button className='bg-btnBg py-2 px-5 font-light hover:bg-hoverBg transition-all duration-200 cursor-pointer rounded-full'>Sign in</button>
        </div>
        </div>
        <button onClick={nav} className='p-3 text-xl rounded-full bg-white text-black lg:hidden'>
{myNav?<RxCross2 />:<IoMenuSharp/>}
        </button>
      </nav>
    
    </section>
    <section className={`${fix?'navbar2 fixed':'navbar2'} w-full`}>
    {
      myNav && 
      <Nav/>
    }
      </section>
    
   </main>
  )
}

export default Header
