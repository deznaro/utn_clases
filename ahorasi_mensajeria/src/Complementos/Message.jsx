import React from 'react'

const Message= (props) => {
    const mensaje = props.mensaje
    return (
        <div className='contenedor_mensaje'>
            <div className='mensaje'>
                {mensaje.author}
                <br />
                {mensaje.content}
                <br />
                {mensaje.fecha}
                <br />
                {mensaje.estado}     
            </div>
        </div>
    )
}

export default Message