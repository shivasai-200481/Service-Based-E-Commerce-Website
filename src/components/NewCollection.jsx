import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const NewCollection = () => {
  const { new_collections} = useContext(ShopContext)
  return (
    <>
      <div className='max-w-screen-2xl md:w-[95%]  mx-auto px-2 rounded-2xl md:mt-6 py-2 md:px-2'>
        <div>
          <div className='flex  flex-col items-center justify-center gap-4'>

            <h2 className='font-extrabold text-4xl'>New Collection</h2>
            <p className='text-2xl font-bold pb-2'>Shop the latest Trends below</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {new_collections.map((product)=>(
              <Item key={product.id} product = {product}/>

            ))}

          </div>

        </div>
      </div>


    </>
  )
}

export default NewCollection