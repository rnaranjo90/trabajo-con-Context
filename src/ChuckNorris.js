import React from 'react'
import { useEffect, useState } from 'react'

function ChuckNorris() {

    const [persona, SetPersona] = useState("")
    let [cont, setCont] = useState(0);

    let  mostrar = () => {
        setCont(++cont);
     }
     

    useEffect( () => { 
        const url = "https://api.chucknorris.io/jokes/random";
        const peticion = fetch(url);

        peticion
        .then(datos => datos.json())
        .then(lectura => SetPersona(
        <div>
            {lectura.value}
            {console.log(lectura)}
        </div>
        ))
        .catch("ALGO ANDA MAL")
    },[cont])


  return (
    <>
      {persona}
      <button onClick={mostrar}>Ver chiste</button>
    </>
  )
}

export default ChuckNorris
