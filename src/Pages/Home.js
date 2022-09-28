import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import LogoSection from '../Components/Main/LogoSection'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'

function Home() {

  return (
    <div>
        <Header/>
        <LogoSection/>
        <NavBarMobile/>
        <Footer/>
    </div>
  )
}

export default Home