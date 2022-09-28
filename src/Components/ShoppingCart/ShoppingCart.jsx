import React, { useEffect, useState } from 'react'
import CardProduct from '../ProductList/CardProduct/CardProduct'
import './ShoppingCart.Styles.css'

function ShoppingCart() {

const [itemsCarrito, setItemsCarrito] = useState([])

useEffect(() => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("dataCart") || '[]')
  setItemsCarrito(cartFromLocalStorage)
  console.log(cartFromLocalStorage)
}, [])


  return (
    <div className='cart-page'>
        <div className="container-cart">
                {
                    itemsCarrito.map((item,index)=>(
                        <CardProduct key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item}/>
                    ))
                    }
        </div>
        <div className='cart-text'>
          <p className='title-cart'>Total</p>
          <p></p>
        </div>
    </div>
  )
}

export default ShoppingCart