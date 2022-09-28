import React from 'react'
import facebookImg from '../../Assets/Img/facebook.png'
import instagramImg from '../../Assets/Img/instagram.png'
import whatsappImg from '../../Assets/Img/whatsapp.svg'
import './Footer-Styles.css'

function Footer() {
  return (
    <section className='footer-section'>
      <hr/>
      <div className='elements-footer'>
      <p className='text-wrights'>© 2022 Crochet Company Todos los derechos reservados.</p>
      <div className='container-icons-footer'>
        <a href="https://www.facebook.com/">
        <img className='icons-footer' src={facebookImg} alt="Facebook" />
        </a>
        <a href='https://www.instagram.com/'>
        <img className='icons-footer'src={instagramImg} alt="Instagram" />
        </a>
        <a href='https://wa.me/34603037977'>
        <img className='icons-footer'src={whatsappImg} alt="Whatsapp" />
        </a>
      </div>
      </div>
    </section>
  )
}

export default Footer