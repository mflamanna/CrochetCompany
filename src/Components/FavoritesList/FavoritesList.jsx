import React, { useEffect, useState } from 'react'
import CardProduct from '../ProductList/CardProduct/CardProduct'

function FavoritesList() {

const [itemsFavorites, setItemsFavorites] = useState([])


useEffect(() => {
  const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favorites") || '[]')
  setItemsFavorites(favoritesFromLocalStorage)
  console.log(favoritesFromLocalStorage)
}, [])


  return (
    <div>
        <div className="container-products">
                {
                    itemsFavorites.map((item,index)=>(
                        <CardProduct key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item}/>
                    ))
                    }
        </div>
    </div>
  )
}

export default FavoritesList