import React from 'react'
// import homepage from '../assets/HomePage.png'
import homepage from '../assets/newHomePage.jpg'

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl md:w-[95%] mx-auto px-2 bg-gray-100 py-2 md:px-2 '>
        <div className='relative  bg-center bg-cover md:rounded-2xl h-[550px] md:h-[600px] ' style={{ backgroundImage: `url(${homepage})`, backgroundPosition: "Top" }} >
          <div className='absolute  inset-0 md:rounded-2xl bg-black opacity-40 '>
          </div >
            <div className='absolute flex flex-col justify-center items-center inset-0 md:rounded-2xl  text-white space-y-4 '>
              <h1 className='text-3xl md:text-5xl font-extrabold   '>Discover Your Style.</h1>
              <p className='text-xl md:text-5xl '>Look Better! Find the perfect look.</p>
              <button className='  font-bold  bg-[rgb(255,66,49)] hover:bg-red-900 transition-all rounded-xl px-2 py-2 '>Shop Now</button>
            </div>
        </div>


        {/* <div className='relative rounded-xl h-[350px] md:h-[669px]'>
          <img src={homepage} alt="" className='rounded-xl md:bg-cover w-full h-full ' />
          <div className='absolute inset-0 bg-black bg-opacity-60 rounded-xl '></div>
          <div className='absolute justify-center gap-8 items-center flex flex-col  inset-0 rounded-xl'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-white   '>Discover Your Style.</h1>
            <p className='text-xl md:text-5xl text-white '>Look Better! Find the perfect look.</p>
            <button className='  font-bold text-white bg-[rgb(255,66,49)] hover:bg-red-900 transition-all rounded-xl px-10 py-3 '>Shop Now</button>


          </div>

        </div> */}




      </div>



    </>
  )
}

export default Banner