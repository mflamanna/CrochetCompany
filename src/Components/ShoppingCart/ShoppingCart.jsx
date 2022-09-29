import React, { useEffect, useState } from 'react'
import CardProduct from '../ProductList/CardProduct/CardProduct'
import CardShopping from './CardShopping'
import './ShoppingCart.Styles.css'
import SumCarrito from './SumCarrito'

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
                        <CardShopping key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item}/>
                    ))
                    }
        </div>
        <div className='cart-text'>
         
        </div>
    </div>
  )
}

export default ShoppingCart