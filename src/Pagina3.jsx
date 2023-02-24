import React from 'react'
import { useContext } from 'react'
import { Contexto} from './contexto/Contexto'

export default function Pagina3() {
  //Hacer que este componente acceda a los valores del Contexto creado
  const {color}= useContext(Contexto); //Aqui el valor de nuestro Contexto es almacenado en {color}

  return (
    <div className="hijo" style={{background:color}}>
        Pagina3
        <h4>{color.toUpperCase()}</h4>
    </div>
  )
}
 