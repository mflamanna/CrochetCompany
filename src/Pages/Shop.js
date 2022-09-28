import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Header/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'
import ProductList from '../Components/ProductList/ProductList'


function Shop() {
  return (
    <>
    <NavBar/>
    <ProductList/>
    <NavBarMobile/>
    <Footer/>
    </>
  )
}

export default Shop