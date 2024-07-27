import React from 'react'
import {nombre as name,persona} from "./funciones"
import { Button } from './components/Boton'
/*import Carta from './components/Carta'*/
import { RowArticle } from './components/RowArticle'
import {sumar, restar} from './components/variables'


function App() {  
console.log(sumar(7,8))
console.log(restar(10,5))
  return (
      <div>
        <RowArticle 
          titulo="Lift-off: The MDN Curriculum Launch" 
          fecha="4 months ago" 
          direccion_author="developer.mozilla.org"/>
        <RowArticle 
          titulo="Baseline's evolution on MDN" 
          fecha="7 months ago" 
          direccion_author="developer.mozilla.org"/>
        <RowArticle 
          titulo="Introducing the MDN Playground: Bring your code to life!" 
          fecha="a year ago" 
          direccion_author="developer.mozilla.org"/>         
      </div>     
  )
}

export default App
