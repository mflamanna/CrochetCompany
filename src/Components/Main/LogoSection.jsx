import React from 'react'
import flowersImg from '../../Assets/Img/logoFlowers.svg'
import starImg from '../../Assets/Img/Star.svg'
import './LogoSection-Styles.css'


function LogoSection() {
  return (
    <main className='logoFlores'>
      <img className="imagenFlores" src={flowersImg} alt="Flores" />
      <p className='crochetText'>Crochet</p>
      <p className='companyText'>Company.</p>
      <img className='starMain' src={starImg} alt="Estrella decorativa" />
    </main>
  )
}

export default LogoSection