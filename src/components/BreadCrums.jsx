import React from 'react'
import { FaCaretRight } from "react-icons/fa";



const BreadCrums = ({product}) => {
  
  return (
    <>
    <div>
      <div className='flex gap-6 m-2 items-center'>

        Home <FaCaretRight /> {product.category}  <FaCaretRight /> {product.name}
      </div>





    </div>
    
    </>
  )
}

export default BreadCrums