import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Header/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'
import { ProductInfo } from '../Components/ProductInfo/ProductInfo'

function Detail() {
  return (
    <>
    <NavBar/>
    <ProductInfo/>
    <NavBarMobile/>
    <Footer/>
    </>
  )
}

export default Detail