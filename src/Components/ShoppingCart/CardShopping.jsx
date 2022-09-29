import dataCart from '../DataCart';
import './CardShopping-Styles.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import addFavorites from '../../Assets/Img/addFavorites.svg'
import deleteFavorites from '../../Assets/Img/deleteFavorites.svg'
import dataFavorites from '../DataFavorites';



function CardShopping({modelo, precio, imagen, element, id}) {
  const [changeFavorites, setChangeFavorites] = useState([])

  function addToCart(){
    dataCart.push(element);
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
    
  }

    
  const clickFavorites = ()=>{
    if (changeFavorites === false){
     setChangeFavorites(true);
     
    }else{
     setChangeFavorites(false);
     if(dataFavorites.indexOf(element)== -1){
      dataFavorites.push(element);
      localStorage.setItem("favorites", JSON.stringify(dataFavorites));
     }
     console.log(dataFavorites);
   }
   }

  return (
    <div className='card-all-shopping'>
        <div className='card-top'>

        <img onClick={clickFavorites} className='favorite-product' id="imgChange" src={changeFavorites? addFavorites : deleteFavorites} alt="Favorito" />

          <div className='card-photo'>
            <Link to={`/detalle/${id}`}>
              <img src={require(`../../Assets/Img/${imagen}.png`)} alt="Producto" />
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

export default CardShopping;