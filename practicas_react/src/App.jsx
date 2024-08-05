import React from 'react'
import Buton from './Buton'
import Layout from './Layout'
import CodePointInfo from './CodePointInfo'
import RowInfo from './RowInfo'

function App() {
  const nombres = ["pepe","maria","juan","zapallito"]
  
  const resultado = nombres.map((nombre)=> {
    return <div>{nombre}</div>
  })
  console.log(resultado)
 





  return (
    <> 
    <div>{resultado}</div>
    
    <Buton>Reservar <i class="bi bi-arrow-repeat"></i></Buton>

    <RowInfo texto="Icon Font">
      <p>Using web font? Copy, paste and go...</p>
      <pre>
        <code data-lang="html">"{<i class="bi bi-arrow-repeat"></i>}"</code>
      </pre>
    </RowInfo>
    <RowInfo texto="Code Point">
      <span>Unicode</span>
      <br />
      <span>CSS</span>
      <br />
      <span>JS</span>
      <br />
      <span>HTML</span>
    </RowInfo>
    <RowInfo texto="Copy HTML">
      <p>Paste the SVG right into your project's code.</p>
      <code>"<i class="bi bi-arrow-repeat"></i>"</code>
    </RowInfo>

    </>
  )
}


const Presentacion = () => {
  return (
    <Layout>
      <h2>presentacion</h2>
  </Layout>
  )
}

export default App

const CodePointInfos = () => {
  return(
    <CodePointInfo>
      <span>Unicode</span>
      <br />
      <span>CSS</span>
      <br />
      <span>JS</span>
      <br />
      <span>HTML</span>
    
    </CodePointInfo>
  )
}

