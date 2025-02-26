import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import x from '../../assets/x.png'
import './Header.css'

const Nav = () => {
  const [drop,setDrop]=useState(false);
  return (
    <>
        <div className="bg-[#060C1C] flex justify-center w-full py-10">
        <div className="w-[95%] p-3">
        <div className="text-sm flex flex-col w-full gap-10">
           <Link to='/'>Homepage</Link>
            <button onClick={()=>setDrop(!drop)}><div className="flex items-center justify-between"><p>Use Case</p> <span><IoChevronDown /></span> </div></button>
            {drop && (<div className="w-full h-[200px] flow">
             <div className="flex flex-col gap-10">
              <Link to='/ultra-high-net-worth-individual'><div className="flex gap-5 items-start pb-3">
              <div className="bg-white p-2 rounded-full"><img src={x} alt="" className="h-4 w-4 object-contain"/></div>
                <div >
                  <h1 className="font-semibold text-md pb-2">UHNWI</h1>
                  <p className="text-sm opacity-[0.8]">
                    
                  Manage their assets in a unique platform with Swiss banking-style service.
                  </p>
                </div>

              </div></Link>
             <Link to='/daos-and-organizations'> <div className="flex gap-5 items-start pb-3">
             <div className="bg-white p-2 rounded-full"><img src={x} alt="" className="h-4 w-4 object-contain"/></div>
                <div >
                  <h1 className="font-semibold text-md pb-1">DAO,s & Organizations</h1>
                  <p className="text-sm opacity-[0.8]">
                    
                  Allow companies and DAOs to pay for Goods Services, Contractors, and more
                  </p>
                </div>

              </div></Link>
              <Link to='/institutional'>
              <div className="flex gap-5 items-start pb-3">
              <div className="bg-white p-2 rounded-full"><img src={x} alt="" className="h-4 w-4 object-contain"/></div>
                <div >
                  <h1 className="font-semibold text-md pb-1">Institutional</h1>
                  <p className="text-sm opacity-[0.8]">
                    
                  Help institutions redefine the landscape of challenges and opportunities
                  </p>
                </div>

              </div>
              </Link>
           <Link to='/real-estate'>   <div className="flex gap-5 items-start pb-3">
           <div className="bg-white p-2 rounded-full"><img src={x} alt="" className="h-4 w-4 object-contain"/></div>
                <div >
                  <h1 className="font-semibold text-md pb-1">Real Estate</h1>
                  <p className="text-sm opacity-[0.8]">
                    
                 
                  Invest in real estate using Metax Digital's crypto payments platform
                  </p>
                </div>

              </div></Link>
             <Link to='/platform'> <div className="flex gap-5 items-center pb-3">
                <div className="bg-white p-2 rounded-full"><img src={x} alt="" className="h-4 w-4 object-contain"/></div>
                <div >
                  <h1 className="font-semibold text-md pb-1">Platform</h1>
                  <p className="text-sm opacity-[0.8]">
                    
                  Access more features and add more value to your customers
                  </p>
                </div>

              </div></Link>
             </div>
            </div>)}
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact us</Link>
           </div>
           <div className="flex flex-col gap-10 pt-10">
            
<button className='bg-hoverBg py-4 px-5 rounded-full'>Sign up</button>
<button className='bg-btnBg py-4 px-5 rounded-full'>Sign in</button>
           </div>
        </div>
        </div>
      
    </>
  );
};

export default Nav;
