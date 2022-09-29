import React, { useEffect, useState } from 'react'
import CardProduct from '../ProductList/CardProduct/CardProduct'
import CardShopping from './CardShopping'
import './ShoppingCart.Styles.css'
import SumCarrito from './SumCarrito'

function ShoppingCart() {

const [itemsCarrito, setItemsCarrito] = useState([])
const [valorTotal, setValorTotal] = useState([0])

useEffect(() => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("dataCart") || '[]')
  setItemsCarrito(cartFromLocalStorage)
  sumarPrecios()
}, [])

const sumarPrecios = ()=>{
  let total = itemsCarrito.reduce((a, b)=>{
    
   return  a + parseInt(b.precio)
   // return 170
  },0)
  setValorTotal(total)
}


  return (
    <div className='cart-page'>
        <div className="container-cart">
                {
                    itemsCarrito.map((item,index)=>(
                        <CardShopping key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item}/>
                    ))
                    }
        </div>
        <div className='cart-card'>
          <p className='title-cart'>Productos</p>
          <div className='cart-text'>
            
            {
              itemsCarrito.map((item,index)=>(
                <SumCarrito key={index} modelo={item.modelo} precio={item.precio}/>
              ))

            }
            <p className='total-cart'>Total: <span>$ {valorTotal}</span></p>
          </div>
        </div>
    </div>
  )
}

export default ShoppingCart