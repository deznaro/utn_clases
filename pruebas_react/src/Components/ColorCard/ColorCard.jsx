import React from 'react'
import "./CardStyles.css"

const CartaDeColores = (props) => {
  return ( 
  <div>
    <div>{props.colors}</div>
    <span>{props.likes}</span>
    <span>{props.fecha}</span>
  </div>
  )
}

export default CartaDeColores
