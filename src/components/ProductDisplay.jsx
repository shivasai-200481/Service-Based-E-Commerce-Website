import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <>
      <div className='max-w-screen-2xl px-2 py-12 md:w-[95%] '>
        <div className='flex md:flex-row justify-evenly flex-col gap-4 items-center '>
          <div className='mx-20' >
            <img className='md:h-[550px] ' src={product.image} alt="" />
          </div>

          <div className='font-bold text-2xl'>{product.name} </div>
          <NavLink to={'/cart'}>
            <div >
              <button onClick={()=>addToCart(product.id)} className='bg-red-700  rounded-xl py-4 px-4 text-white  ' >ADD TO CART</button>
            </div>
          </NavLink>
        </div>

      </div>






    </>
  )
}

export default ProductDisplay