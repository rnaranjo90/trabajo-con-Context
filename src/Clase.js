import './App.css';
import {useEffect, useState} from 'react'


function Clase() {


  const [datos, setDatos] = useState([]);
  

  useEffect( () => {   

    const url = "https://randomuser.me/api/?results=3";
    const peticion = fetch(url);

    peticion
    .then(datos=> datos.json())
    .then(lectura => {
      lectura.results.map((persona) => {
        setDatos( (e) => 
          [...e,<div key={persona.email}>
          <div>{persona.name.first}</div>
          <div>
            <img src={persona.picture.large} />
          </div>
        </div>])
       
        }) 
    } ) 
    .catch(() => console.log("MAL")) 
  },[])

  return (
    <>
    <h2>Empleado/a del mes:</h2>
    {datos}
    <br></br>
  
    </>
  );
}

export default Clase;
