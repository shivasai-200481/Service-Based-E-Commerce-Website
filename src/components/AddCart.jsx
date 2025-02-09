import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'
import BreadCrums from './BreadCrums'
import NewCollection from './NewCollection'

const AddCart = () => {
  const { products } = useContext(ShopContext)
    const { productId } = useParams()
    const product = products.find((e) => (e.id === Number(productId)))
    
  return (
    <>
      <div className='max-w-screen-2xl bg-gray-300  md:w-[95%] mx-auto my-12  px-2 py-12 rounded-xl md:px-2'>
        <BreadCrums product={product} />
        <ProductDisplay product={product} />


      </div>
      <NewCollection />

    </>
  )
}

export default AddCart