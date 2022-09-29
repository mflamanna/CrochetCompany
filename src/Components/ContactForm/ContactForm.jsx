import React from 'react'
import './ContactForm-Styles.css'
import whatsappImg from '../../Assets/Img/whatsapp.svg'

function ContactForm() {
  return (
    <div className='pageContact'>
        <p className='text-pages'>Contactame!</p>
        <form className='formContact' action='/url' method='POST'>
            <label>
            Nombre
                <input className='inputContact' name='name' type="text" required/>
            </label>
            <label>
            Email
                <input className='inputContact' name='email' type="email" required/>
            </label>
            <label>
            Message
                <textarea className='inputContact' name='message' type="text" required/>
            </label>
            <input className='inputButton' type="Submit" />
        </form>
        <h2 className='text-contact'>Si preferis podes enviarme un whatsapp</h2>
        <a href='https://wa.me/34603037000'>
            <img className="whatsapp-button" src={whatsappImg} alt="Whatsapp" />
        </a>
    </div>
  )
}

export default ContactForm