import React from 'react'
import ContactForm from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Header/NavBar/NavBar'
import NavBarMobile from '../Components/NavBarMobile/NavBarMobile'

function Contact() {
  return (
    <>
    <NavBar/>
    <ContactForm/>
    <NavBarMobile/>
    <Footer/>
    </>
  )
}

export default Contact