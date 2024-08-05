import React from 'react'
import Button from './Components/Button'
import CartaDeColores from './Components/colorCard/colorCard'

function App() {
  const cuadradosColores = [
      { colors: ["#000000", "#FF4191", "#E90074", "#FFF078"],
      likes: 50, 
      fecha: "13 hours"
      },
      { colors: ["#EEEDEB", "#E6B9A6", "#939185", "#2F3645"],
      likes: 216, 
      fecha: "Yesterday"
      },
      { colors: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"],
      likes: 228, 
      fecha: "2 days"
      },
      { colors: ["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"],
      likes: 432, 
      fecha: "3 days"
      }
  ]
  const listaColores = cuadradosColores.map((elemento) => {
    return <div>{elemento}</div>
  })
  console.log(listaColores)

} 

  
  /*
  const nombres = ["pepe", "juan carlos", "maria", "asucena"]
 /* const resultado = nombres.map((nombre) => {
    return "<div>" + nombre + "</div>"
  }) 
 */
/*
  const listaJSXNombres = [

    <div>Juan</div>,
    <div>Maria</div>,
    <div>Marcos</div>,
  ]
  const lista = nombres.map((nombre) => {
    return <div>{nombre}</div>
  })
  return (
    <div>
      <h2>Nombres</h2>
      {lista}
    </div>
  )
    */


/*

const Componente = () => {
  return (
    <Layout>
      <h2>Hola, esta es una página</h2>
    </Layout>
  )
}

const RowInfo2 = () => { 
  return (
    <div>
      <RowInfo title="Icon font"> 
        <p>Using  the web font? Copy, paste, and go.</p>
        <code>{`<i class= "bi bi-window-sidebar"></i>`}</code>
      </RowInfo>
      <RowInfo title="Code Point">
        <span>Unicode: U+F61F</span>
        <br />
        <span>CSS:\F61F</span>
        <br />
        <span>JS: \uF61F</span>
        <br />
        <span>HTML: &#xF61F </span>
      </RowInfo>
      <RowInfo title= "Copy HTML">
        <p>Paste the SVG right into your project's code.</p>
        <pre>
          <code>
            {`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/></svg>`}
          </code>
        </pre>
      </RowInfo>
    </div>
  )

}

const CPI = () => {
  return (
    <CodePointInfo>
      <span>Unicode: U+F61F</span>
      <br />
      <span>CSS:\F61F</span>
      <br />
      <span>JS: \uF61F</span>
      <br />
      <span>HTML: &#xF61F </span>
    </CodePointInfo>
  )
}
*/
export default App
