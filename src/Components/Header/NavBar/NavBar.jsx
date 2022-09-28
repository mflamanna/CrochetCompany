import React from 'react'
import { Link } from 'react-router-dom'
import IconFavorites from '../../../Assets/Img/favorites.svg'
import IconShop from '../../../Assets/Img/carrito.png'
import './NavBar-Styles.css'
import SearchBar from './SearchBar/SearchBar'

function NavBar() {
  return (
    <>
    <div className='containerNavBar'>
        <ul className='itemsNavBar'>
            <li className='textNavBar'><Link to='/'>Home</Link></li>
            <li className='textNavBar'><Link to='/shop'>Shop</Link></li>
            <li className='textNavBar'>Recursos</li>
            <li className='textNavBar'><Link to='/contacto'>Contacto</Link></li>
        </ul>
      <div className='iconsNavBar'>
        <SearchBar/>
        <Link to='/favoritos'>
        <img className='iconNavBar' src={IconFavorites} alt="Favorites" />
        </Link>
        <Link to='/carrito'>
        <img className='iconNavBar' src={IconShop} alt="Shop"/>
        </Link>
      </div>
    </div>
    <hr />
    </>
  )
}

export default NavBar