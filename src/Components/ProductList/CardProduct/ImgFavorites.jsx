import React from 'react'
import { useState, useEffect } from 'react'
import addFavorites from '../../../Assets/Img/addFavorites.svg'
import deleteFavorites from '../../../Assets/Img/deleteFavorites.svg'
// import dataFavorites from '../../DataFavorites'


function ImgFavorites(props) {
const [dataFavorites, setDataFavorites] = useState([])

useEffect(() => {
 const favoritesLocalStorage = JSON.parse(localStorage.getItem("favorites") || '[]')
 setDataFavorites (favoritesLocalStorage)
  }
, [])



const addToFavorites = ()=>{
    setDataFavorites([...dataFavorites, props.elementCrochet])
    localStorage.setItem("favorites", JSON.stringify(dataFavorites));
}

const removeToFavorites = ()=>{
    
}
if(dataFavorites.find((element)=>element.id === props.elementCrochet.id)){
  return (
    <>
        <img onClick={addToFavorites} className='favorite-product' id="imgChange" src={deleteFavorites} alt="Favorito" />

    </>
  )
}else{
    return (
        <>
            <img onClick={addToFavorites} className='favorite-product' id="imgChange" src={addFavorites} alt="Favorito" />
    
        </>
      )
}   
}
 

export default ImgFavorites