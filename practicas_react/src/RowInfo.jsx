import React from 'react'

const RowInfo = (props) => {
  return (
    <div>
        <h2>{props.texto}</h2>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default RowInfo