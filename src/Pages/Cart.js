import React from 'react'
import NavBar from '../Components/Header/NavBar/NavBar'
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart'
import Footer from '../Components/Footer/Footer'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'
import ClearButton from '../Components/ShoppingCart/ClearButton'

function Cart() {
  return (
    <>
      <NavBar/>
      <h2 className='text-pages'>Carrito</h2>
      <ShoppingCart/>
      <ClearButton/>
      <NavBarMobile/>
      <Footer/>
    </>
  )
}

export default Cart