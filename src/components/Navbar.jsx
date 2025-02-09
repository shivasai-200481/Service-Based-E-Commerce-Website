import React, { useState } from 'react'
// import pic from "../../public/logo.png"
import { PiShoppingCartDuotone } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Responsive from './Responsive';
import logo from "../assets/logo.png"

const navItems = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Mens", path: "/mens" },
  { id: 3, text: "Womens", path: "/womens" },
  { id: 4, text: "Kids", path: "/kids" }

];
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      <div className=' max-w-screen-2xl md:w-[98%] sticky top-0 z-10 w-[98%] mx-auto px-2 py-2 md:px-2 shadow-xl   bg-[rgb(170,172,245)] rounded-xl '>
        {/* parent */}
        <div className=' w-full flex  justify-between items-center'>
          {/* logo */}
          <div>
            <div className=''>
              <img src={logo} className='w-14 rounded-full' alt="" />

            </div>
          </div>
          {/* home about for desktop*/}
          <div className='flex items-center gap-4 md:gap-10  '>
            <ul className='hidden md:flex gap-4 md:gap-10'>
              {navItems.map(({ id, text, path }) => (
                <li key={id}>

                  <NavLink to={path}

                    className={({isActive}) => (
                      isActive ? "bg-indigo-400 px-6 py-3 rounded-xl " : ""

                    )}

                  >
                    {text}
                  </NavLink>

                </li>

              ))}
            </ul>
            {/* Login button */}
            <NavLink to="/login" >

              <button className='hover hidden md:block  bg-red-400 font-bold rounded-lg px-4 py-1 md:px-4  md:py-1'>Login</button>
            </NavLink>
            {/* Shopping Cart */}
            <div className='relative'>
              <NavLink to="/cart">

                <PiShoppingCartDuotone className='text-3xl' />

              </NavLink>

              <span className='bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 absolute -top-2 -right-2 shadow-lg'>0</span>
            </div>
            {/* Menu functionality */}
            <div className=' md:hidden ' onClick={toggleMenu} >
              {menu ? <IoMdClose className='text-3xl' /> : <AiOutlineMenu className='text-2xl' />

              }
            </div>
          </div>
        </div>
        <Responsive menu={menu} setMenu={setMenu} />
      </div>

    </>

  )
}

export default Navbar