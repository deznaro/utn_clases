import React from 'react'
import "./CartaMierda.css" 


const CartaDeColores = (props) => {
    return ( <div className='cartitaPoronga'>
      <div>{props.colors}</div>
      <br />
      <span>{props.likes}</span>
      <br />
      <span>{props.fecha}</span>
    </div>
    )
  }
  
export default CartaDeColores