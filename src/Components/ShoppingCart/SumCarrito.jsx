import React from 'react'

function SumCarrito({modelo, precio}) {
  return (
    <div className='carrito-item'>
        <p className='one'>{modelo}</p>
        <p className='two'>{precio}</p>
    </div>
  )
}

export default SumCarrito