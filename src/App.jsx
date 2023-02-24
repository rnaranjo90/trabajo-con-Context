import React from 'react'
import './App.css';
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'
import Colores from './Colores'
import {Datos} from "./contexto/Contexto"

export default function App() {

  return (   
<>
<Datos>  
<div className="App">
        <Pagina1/>
        <Pagina2/>
        <Pagina3/>
    </div>
    <Colores/>
</Datos>

</>
   
  )

}
