import React from 'react'
import IconResources from '../../Assets/Img/abrir-caja.png'
import IconHome from '../../Assets/Img/home.png'
import IconTienda from '../../Assets/Img/tienda.png'
import IconContact from '../../Assets/Img/sobre.png'
import { Link } from 'react-router-dom'
import './NavBarMobile-Styles.css'

function NavBarMobile() {
  return (
    <div className='container-navbar-mobile'>
    <hr/>
    <div className='navbar-mobile'>
        <Link to="/">
          <img src={IconHome} alt="Home"></img>
        </Link>
        <Link to="/shop">
          <img src={IconTienda} alt="Tienda"/>
        </Link>
          <img src={IconResources} alt="Recursos" />
        <Link to="/contacto">
        <img src={IconContact} alt="Contacto" />
        </Link>
    </div>
    </div>
  )
}

export default NavBarMobile