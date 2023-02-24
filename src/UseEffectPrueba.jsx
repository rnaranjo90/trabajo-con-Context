import React from 'react'
import { useEffect, useState } from 'react'

function UseEffectPrueba() {

    let [variable, setVariable] = useState([]);
    let [valorBuscar, setValorBuscar] = useState();

const buscar = (e) => {
        setValorBuscar(e.target.value);
}
    
     
     useEffect( () => {
        let peticion = fetch("https://scratchya.com.ar/react/datos.php")

        peticion
        .then(datos => datos.json())
        .then(valores => setVariable(valores.filter(e => e.precio > valorBuscar)
                        .map(v => (v.descripcion+" "))) )
        .catch("Algo anda mal...")

     })




  return (
    <>
       <input onChange={buscar}></input>
        <div> {variable.map(e => e)} </div>
    </>
  )
}

export default UseEffectPrueba