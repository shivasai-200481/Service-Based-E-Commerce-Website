import React, { useState } from 'react'
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
const Login = () => {
  const [password, setPassword] = useState(false)
  const togglePassword = () => {
    setPassword(!password);
  }
  return (
    <>
      <div className='max-w-screen-2xl bg-violet-400 md:mx-auto mx-2 px-2 md:w-[500px] py-12 rounded-xl md:px-2 md:mt-40 mt-20  '>
        <div className='space-y-4 ' >

          <form className='flex flex-col gap-6  px-4 py-6 ' action="">
            <h2 className='text-center font-bold text-white text-2xl'>Login To Your Account</h2>
            <div className='flex flex-col gap-2  '>
              <label className='font-bold' htmlFor="email">Email Address</label>
              <input type="email" placeholder='Your mail address' className='px-4  py-2 rounded-xl focus:outline-none' />
            </div>
            <div className='relative flex flex-col gap-2'>
              <label className='font-bold' htmlFor="password">Password</label>
              <input type={password ? 'text' : 'password'} placeholder='Your password' className='px-4 py-2 rounded-xl focus:outline-none' />
              <button type='button' onClick={togglePassword} className='absolute right-4 bottom-3  '>{password ? <RxEyeOpen /> : <GoEyeClosed />
              }
              </button>

            </div>


            <button className='bg-red-600 text-white font-bold   rounded-xl py-3 px-4'>Login</button>
            

            <p className='text-center text-white font-bold '>Don't have an account yet? <a href="" className='underline text-blue-700'>Sign Up!</a> </p>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login