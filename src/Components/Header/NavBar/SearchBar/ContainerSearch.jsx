import React from 'react'
import CardProduct from '../../../ProductList/CardProduct/CardProduct';
import './Styles-SearchBar.css'

function ContainerSearch({searchState, apiCrochet, searchTerm}) {
    if (searchState){
  return (
      <div className="container-search">
                {apiCrochet.filter((val)=>{
                 if(searchTerm == ""){
                 return null}
                  if(val.modelo.toLowerCase().includes(searchTerm.toLowerCase())){
                 return val;
                 }
                 
             }).map((val,key)=>{
                 return <div>
                         <CardProduct key={key} modelo={val.modelo} precio={val.precio} imagen={val.imagen} id={val.id}/>

                     </div>
             })}
         </div>
  )
}}

export default ContainerSearch