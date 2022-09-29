import React from 'react'

function SumCarrito(modelo, precio) {
  return (
    <>
        <p className='title-cart'>Productos</p>
        <p>{modelo}</p>
        <p>{precio}</p>
        <br />
        <p>Total</p>
    </>
  )
}

export default SumCarrito