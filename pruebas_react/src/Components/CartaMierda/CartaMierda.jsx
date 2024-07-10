import React from 'react'


const CartaDeColores = (props) => {
    return ( <div className='cartitaPoronga'>
      <div>{props.colors}</div>
      <span>{props.likes}</span>
      <span>{props.fecha}</span>
    </div>
    )
  }
  
export default CartaDeColores