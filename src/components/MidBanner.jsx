import React from 'react'
import mid from '../assets/mid.png'
const MidBanner = () => {
    return (
        <>
            <div className='max-w-screen-2xl bg-gray-300  md:w-[95%] mx-auto px-2 py-12 rounded-xl md:px-2 '>
                <div>
                    <div className='relative w-full rounded-xl '>
                        <img src={mid} className='w-full h-[350px] md:h-full rounded-xl ' alt="" />
                        <div className='absolute inset-0 bg-black bg-opacity-50 rounded-xl'>

                        </div>
                        <div className='flex flex-col justify-center items-center absolute inset-0'>
                            <h1 className='text-white font-extrabold text-2xl'>Winter Collection 2024</h1>
                            <button className='text-white bg-red-800 py-2 px-4 mt-4 rounded-xl hover '>Shop Now</button>
                            
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default MidBanner