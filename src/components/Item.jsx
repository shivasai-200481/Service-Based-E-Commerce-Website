import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <>
      <div className='flex  flex-col gap-2'>

        <div>
          <NavLink to={`/products/${product.id}`}>
            <div onClick={window.scrollTo(0,0)}>
              <img src={product.image} className='rounded-xl h-[450px]  md:w-[95%] w-[98%] ' alt={product.name} />
            </div>

          </NavLink>
        </div>
        <div>
          <NavLink>
            <span>{product.name}</span>
            <p>${product.new_price}</p>

          </NavLink>
        </div>

      </div>

    </>
  )
}

export default Item