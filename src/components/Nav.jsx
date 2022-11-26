

import React, { useState } from 'react'
// import Button from './Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import TerminalIcon from '@mui/icons-material/Terminal';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Nav = () => {
    
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-screen bg-[#424242]'>
      <div className='md:flex items-center justify-between py-0 md:px-5 px-2'>
      <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-700'>
        <div className=' flex flex-row mr-1 mb-2 mt-1 '>
          <img src='pine.jpeg' alt='logo' style={{height: 50, width: 50}} />
          <img src="bi0s.jpeg"  alt="bios"  style={{height: 50, width: 100}}/ >
        </div>
        
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
     
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static zinc-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       <button className="text-white p-1 ml-1 ">
         <NotificationsIcon className=" mr-0 mt-1 pr-1 " style={{height:30, width: 25}}/>
        
       </button>
       <button className="text-white p-1 ml-1">
         <InfoIcon  className=" mr-0 mt-1 pr-1" style={{height:30, width: 25}}/>
       </button>
       <button className="text-white p-1 ml-1">
         <TerminalIcon className="mr-0 mt-1 pr-1" style={{height:30, width: 25}}/>
       </button>
       <button className="text-white p-1 ml-1">
         <MoreVertIcon className="mr-0 mt-1 pr-1" style={{height:35, width: 25}}/>
       </button>

      </ul>
      </div>
    </div>
  )
}

export default Nav