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
    <div className='card-all1'>
        <div className='card-top'>

           <ImgFavorites elementCrochet={element}/>

          <div className='card-photo'>
              <img src={require(`../../Assets/Img/${imagen}.png`)} alt="Producto" />
          </div>
        </div>
        <div className='card-texts'>
            <p className='card-title'>{modelo}</p>
            <p>${precio}</p>
            <br />
            <p>{descripcion}</p>
            <button onClick={addToCart} className='add-button'>
              +
            </button>
        </div>
    </div>
  )
}

export default CardProductInfo;