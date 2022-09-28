import React from 'react'
import './ClearButton.Styles.css'

function ClearButton() {

const clearCart = ()=>{
  localStorage.clear();
  window.location.reload(false);
}

  return (
    <div className='section-cart'>
    <button className='clear-cart' onClick={clearCart}>
        Vaciar Carrito
    </button>
    </div>
  )
}

export default ClearButton