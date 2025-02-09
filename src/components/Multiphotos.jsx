import React from 'react';
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import fourth from '../assets/new.png';
import pic from '../assets/comfort.png';

const Multiphotos = () => {
    return (
        <>
            <div className='max-w-screen-2xl md:w-[90%] mx-auto px-2 py-2 md:px-2'>
                {/* Use grid-cols-1 for phones and md:grid-cols-3 for medium devices */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* First card */}
                    <div className='relative h-[250px] md:h-[300px] rounded-xl'>
                        <img src={first} className='w-full h-full rounded-xl bg-cover' alt="" />
                        <div className='absolute inset-0 bg-black rounded-xl opacity-50'></div>
                        <div className='flex absolute inset-0 flex-col items-center justify-center rounded-xl gap-2'>
                            <h2 className='text-white text-2xl md:text-3xl font-extrabold'>New Arrivals</h2>
                            <button className="bg-red-500 font-bold hover:bg-red-700 text-white py-2 px-4 rounded-lg">Discover</button>
                        </div>
                    </div>

                    {/* Second card */}
                    <div className='relative h-[250px] md:h-[300px] rounded-xl'>
                        <img src={second} className='w-full h-full rounded-xl bg-cover' alt="" />
                        <div className='absolute inset-0 bg-black rounded-xl opacity-50'></div>
                        <div className='flex absolute inset-0 flex-col items-center justify-center rounded-xl gap-2'>
                            <h2 className='text-white text-2xl md:text-3xl font-extrabold'>Limited Offer</h2>
                        </div>
                    </div>

                    {/* Third card */}
                    <div className='relative h-[250px] md:h-[300px] rounded-xl'>
                        <img src={third} className='w-full h-full rounded-xl bg-cover' alt="" />
                        <div className='absolute inset-0 bg-black rounded-xl opacity-50'></div>
                        <div className='flex absolute inset-0 flex-col items-center justify-center rounded-xl gap-2'>
                            <h2 className='text-white text-2xl md:text-3xl font-extrabold'>Seasonal Sale</h2>
                            <button className='bg-red-500 px-4 py-2 rounded-lg text-white font-bold '>Shop Now</button>
                        </div>
                    </div>

                    {/* Seasonal sale card */}
                    <div className='relative h-[250px] md:h-[300px] rounded-xl'>
                        <img src={pic} className='w-full h-full rounded-xl bg-cover' alt="" />
                        <div className='absolute inset-0 bg-black rounded-xl opacity-50'></div>
                        <div className='flex absolute inset-0 flex-col items-center justify-center rounded-xl gap-2'>
                            <h2 className='text-white text-2xl md:text-3xl font-extrabold'>Seasonal Sale</h2>
                        </div>
                    </div>

                    {/* New Fashion Card */}
                    <div className='relative h-[250px] md:h-[300px] col-span-1 md:col-span-2 rounded-xl'>
                        <img src={fourth} className='w-full h-full rounded-xl bg-cover' alt="" />
                        <div className='absolute inset-0 bg-black rounded-xl opacity-50'></div>
                        <div className='flex absolute inset-0 flex-col items-center justify-center rounded-xl gap-2'>
                            <h2 className='text-white text-2xl md:text-3xl font-extrabold'>New Fashion</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Multiphotos;
