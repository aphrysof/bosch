import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineBell} from 'react-icons/ai'
import profileIcon from '../../assets/avatar.svg?url'


const Navbar = () => {
  return (
     <nav className="font-body bg-white border-b-[1.5px] border-[#d1d1d1] flex justify-between items-center py-4 pl-12 pr-9 sticky rounded-lg" style={{"margin": "40px 40px 4px 350px"}} >
        <div className="">
        <h1 className="text-almostBlack font-medium text-2xl">Dashboard</h1>
        </div>
        {/* //TODO
        //conditionally rendering the notification component based on the route */}
        <div className="flex items-center relative">
            <div className="flex items-center ml-6">
         <img src={profileIcon} alt ="profile"  className='mr-4'/>
           <div data-testid = "button-click" className="text-base text-[#513131] mr-4 ml-2 cursor-pointer">
                <p data-testid = "paragraph-2">Alex, Chibueyim</p>
                <p  data-testid = "paragraph-3" className="text-[#707070] text-sm">username@mail.com</p>
           </div>
           <MdKeyboardArrowDown className="absolute top-2 right-0"/>
            </div>
        </div>
        </nav>
  )
}

export default Navbar