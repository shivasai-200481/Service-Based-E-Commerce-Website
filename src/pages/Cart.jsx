import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import shopping from '../assets/shopping.png'

const Cart = () => {
  const { products, new_collections, cartItems, addToCart, removeFromCart, getTotalCartItems } = useContext(ShopContext)
  return (

    <>
      <div className='max-w-screen-2xl  md:w-[95%] mx-2 md:mx-auto px-2 py-12 rounded-xl md:px-2 mt-20 md:mt-10  '>
        <div className=''>
          {getTotalCartItems() == 0 ? (

            <div className='flex md:items-center  gap-20 md:gap-60 flex-col md:flex-row '>
              <img src={shopping} alt="cart" />
              <p className='text-2xl md:text-4xl text-center  font-bold'>Your Cart is empty!</p>

            </div>


          ) : (
            <div >
              <div className='grid md:grid-cols-4 grid-cols-2  my-2'>
                <p>Products</p>
                <p className='text-center md:text-start'>Title</p>
                <p className='text-center hidden md:block'>Price</p>
                <p  className='text-center hidden md:block '>Remove</p>
              </div>
              
              <hr className='h-[6px] my-2 bg-gray-400 ' />  
                {products.map((e) => {
                  if (cartItems[e.id] > 0) {
                    return (
                      <div className='grid md:grid-cols-4 grid-cols-2 my-6 py-2 items-center'  key={e.id}>
                        <img className='w-24  ' src={e.image} alt="" />
                        <p className=' md:text-2xl text-sm '>{e.name}</p>
                        <p className='md:text-center text-left py-2'>${e.new_price}</p>
                        <button onClick={()=> removeFromCart(e.id)} className='text-center  md:mx-10 my-6 py-2  bg-red-600 text-white rounded-xl '>Deselect</button>
                      </div>

                    )
                  }

                })}
              </div>
            

          )}
        </div>

      </div>
    </>

  )
}

export default Cart