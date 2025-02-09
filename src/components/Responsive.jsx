import React from 'react'
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Mens", path: "/mens" },
    { id: 3, text: "Womens", path: "/womens" },
    { id: 4, text: "Kids", path: "/kids" }

];

const Responsive = ({ menu, setMenu }) => {
    const handleMenuClose = () => {
        setMenu(false)

    }
    return (
        <>
            <div className={`${menu ? "left-0 " : "-left-[100%]"}  fixed h-screen w-[90%] flex z-10 bg-slate-300 px-6 py-4 mt-2 `}>
                <div>
                    <div className='flex gap-3 items-center'>

                        <div className=''>
                            <CgProfile className='text-4xl' />
                        </div>
                        <div className='px-3 text-red-800 '>
                            Hello User.
                        </div>

                    </div>
                    <div>
                        <div className='flex flex-col gap-6'>

                            <ul className='flex flex-col gap-3 mt-4 '>

                                {navItems.map(({ id, text, path }) => (
                                    <li key={id} className='hover  '>
                                        <NavLink to={path} onClick={handleMenuClose} >


                                            {text}
                                        </NavLink>
                                    </li>

                                ))}
                            </ul>
                            <div>
                                <NavLink to='/login'>

                                    <button onClick={handleMenuClose} className='hover  md:block  bg-red-400 font-bold rounded-lg px-4 py-1 md:px-4  md:py-1'>Login</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Responsive