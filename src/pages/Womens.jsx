import React, { useContext } from 'react'
import women from '../assets/women.jpg'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'
import Footer from '../components/Footer'
const Womens = () => {
  const { products } = useContext(ShopContext)
  const womenProducts = products.filter((product) => (product.category == 'women'
    ))
  return (
    <>
      <div className='max-w-screen-2xl w-full md:w-[95%] container md:px-10 px-2 mx-auto py-8'>
        <div style={{ backgroundImage: `url(${women})`, backgroundPosition: "Top" }} className='bg-cover bg-enter h-[550px] relative'>
          <div className='absolute inset-0  bg-black bg-opacity-40 '></div>
          <div className='absolute flex md:justify-start  items-center justify-center md:px-8  inset-0'>
            <div className='flex gap-4 flex-col  justify-center items-center text-white'>
              <p className='text-2xl md:text-3xl font-extrabold '> Latest for Womens 50% off</p>
              <button className='bg-red-700 py-2 w-28  font-bold rounded-xl'>Order Now</button>
            </div>

          </div>


        </div>
        <div className='md:pt-20 pt-10'>
          <h1 className='font-extrabold text-2xl md:text-3xl'>Women's Collections</h1>
          <div className='grid grid-cols-1 gap-8 mt-6 mx-4  md:grid-cols-3'>
            {womenProducts.map((products)=>(
              <Item key={products.id} product={products}/>
            ))}

          </div>

        </div>
        
      </div>
    
    </>
  )
}

export default Womens