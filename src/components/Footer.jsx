import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import logo from '../assets/logo.png'
const Footer = () => {
    const touch = [
        {   id:1,
            icon: <FaInstagram />
        },
        {   id:2,
            icon: <FaFacebook />


        },
        {   id:3,
            icon: <FaXTwitter />

        },
        {   id:4,
            icon: <SiWhatsapp />

        },
    ]
    return (
        <>
            <footer className='max-w-screen-2xl md:w-[100%] mx-auto px-2 bg-gray-900 text-gray-200 py-2 md:px-2'>
                <div className='flex  gap-3 flex-col md:flex-row md:justify-between'>
                    <div>
                        <img src={logo} className='w-14 hidden md:block rounded-full hover:w-16 cursor-pointer  ' alt="" />
                    </div>
                    <div className='flex flex-col gap-2 border py-2 px-2   border-x-slate-50 md:border-0'>
                        <h2 className='text-2xl font-bold'>Customer Services</h2>
                        <p>Contact Us</p>
                        <p>Shipping & Returns</p>
                        <p>FAQs</p>
                        <p>Size Guide</p>

                    </div>
                    <div className='border py-2 px-2  border-x-slate-50 md:border-0'>
                        <p className='text-2xl font-bold'>Follow Us On Social Media.</p>
                        <div className='flex gap-6 py-6 justify-center items-center '>
                            
                            {touch.map(({id,icon})=>(
                                <div className='text-3xl' key={id}>{icon}</div>
                                


                            ))}
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 border  border-x-slate-50 md:border-0 py-2 px-2'>
                        <h3 className='text-2xl font-bold'>Stay With Us!</h3>
                        <p>Subscribe to become our memeber.</p>
                        <input type="" className=' rounded-md py-1 px-4 text-black' placeholder='Your Email Address' />
                        <button className='bg-red-700  rounded-xl py-2 px-1'>Subscribe</button>

                    </div>
                </div>




            </footer>

        </>
    )
}

export default Footer