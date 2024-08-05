import React from 'react'
import "./App.css"
import Message from './Complementos/Message'

function App() {

  const DATA_MOOK = [
    {
      author: 'pepe',
      content: 'Hola?',
      fecha: 'ayer a 15:34',
      estado: 'visto',
      id: 1
    },
    {
      author: 'yo',
      content: 'Sos real OMG',
      fecha: 'ayer a 15:35',
      estado: 'visto',
      id: 2
    },
    {
      author: 'pepe',
      content: 'Obviamente, acaso lo dudaste?',
      fecha: 'ayer a 15:36',
      estado: 'visto',
      id: 3
    },
    {
      author: 'yo',
      content: 'Jamas.',
      fecha: 'ayer a 15:37',
      estado: 'entregado',
      id: 4
    },
  ] 

  const listaMensajes = DATA_MOOK.map((mensaje) => {
    return <Message Mensaje = {mensaje}/>
  })

  return (
    <>
      <div>
        {listaMensajes}
      </div>     
    </>
  )
}

export default App
