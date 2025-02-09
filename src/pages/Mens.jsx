import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import men from '../assets/mens.png'
import Item from '../components/Item.jsx'
import Footer from '../components/Footer.jsx'
const Mens = () => {
  
  const {products} = useContext(ShopContext)
  const menProducts = products.filter((product)=>product.category === "men")
  return (
    
    <>
      <div className='max-w-screen-2xl w-full md:w-[95%] container md:px-10 px-2 mx-auto py-8 '>
        <div>
          <div className='relative bg-cover bg-center h-[550px] ' style={{ backgroundImage: `url(${men})`, backgroundPosition: 'Top' }}>
            <div className='inset-0 absolute bg-black bg-opacity-40'></div>
            <div className='absolute flex md:justify-start  items-center justify-center md:px-8  inset-0'>
              <div className='flex gap-4 flex-col  justify-center items-center text-white'>
                <p className='text-2xl md:text-3xl font-extrabold '>Latest  for Mens 50% off</p>
                <button className='bg-red-700 py-2 w-28  font-bold rounded-xl'>Order Now</button>
              </div>

            </div>


          </div>


          <div className='md:pt-20 pt-10'>
            <h1 className='font-extrabold text-2xl md:text-3xl '>Men's Collection</h1>
            <div className='grid grid-cols-1 gap-8 mt-6 mx-4  justify-center max-w-7xl  md:grid-cols-3'>
              
              {menProducts.map((product)=>(
                <Item  key={product.id} product={product}/>

              ))}

            </div>

          </div>


        </div>
      </div>



      
    </>

  )
}

export default Mens