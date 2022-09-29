import React from 'react'
import dataCart from '../DataCart';
import ImgFavorites from '../ProductList/CardProduct/ImgFavorites';
import './CardProductInfo.styles.css'


function CardProductInfo({modelo, precio, imagen, element, id, descripcion}) {


  
  function addToCart(){
    dataCart.push(element);
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
    
  }

  

  return (
    <div className='card-all-info'>
        <div className='card-top-info'>

           <ImgFavorites elementCrochet={element}/>

          <div className='card-photo-info'>
              <img src={require(`../../Assets/Img/${imagen}.png`)} alt="Producto" />
          </div>
        </div>
        <div className='card-texts-info'>
            <p className='card-title-info'>{modelo}</p>
            <p>${precio}</p>
            <br />
            <p>{descripcion}</p>
            <p>Diseño : <a href='https://aleli.com.ar/'>Aleli Deco Crochet</a></p>
            <button onClick={addToCart} className='add-button-info'>
              +
            </button>
        </div>
    </div>
  )
}

export default CardProductInfo;