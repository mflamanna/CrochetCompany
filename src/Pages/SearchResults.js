import React from 'react'
import ContainerSearch from '../Components/Header/NavBar/SearchBar/ContainerSearch'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function SearchResults() {
  return (
    <div>
      <Header/>
      <ContainerSearch/>
      <NavBarMobile/>
      <Footer/>
    </div>
  )
}

export default SearchResults