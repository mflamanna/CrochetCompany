import React from 'react'
import FavoritesList from '../Components/FavoritesList/FavoritesList'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Header/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'

function Favorites() {
  return (
    <div>
      <NavBar/>
      <h2 className='text-pages'>Favoritos</h2>
      <FavoritesList/>
      <NavBarMobile/>
      <Footer/>
    </div>
  )
}

export default Favorites