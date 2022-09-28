import React from 'react'
import { Link } from 'react-router-dom'
import dataCart from '../../DataCart'
import './CardProduct-Styles.css'
import ImgFavorites from './ImgFavorites'

function CardProduct({modelo, precio, imagen, element, id}) {


  
  function addToCart(){
    dataCart.push(element);
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
    
  }

  

  return (
    <div className='card-all'>
        <div className='card-top'>

           <ImgFavorites elementCrochet={element}/>

          <div className='card-photo'>
            <Link to={`/detalle/${id}`}>
              <img src={require(`../../../Assets/Img/${imagen}.png`)} alt="Producto" />
            </Link>
          </div>
        </div>
        <div className='card-texts'>
            <p>{modelo}</p>
            <p>${precio}</p>
            <button onClick={addToCart} className='add-button'>
              +
            </button>
        </div>
    </div>
  )
}

export default CardProduct;