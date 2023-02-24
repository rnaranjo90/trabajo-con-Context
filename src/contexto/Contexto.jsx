//Aqui se creara el contexto y se accedera a los valores del mismo

import React,{createContext, useState} from 'react'
import Colores from '../Colores';

//Creando Contexto
export const Contexto = createContext();

//Accediando a los valores del Contexto(lo haremos mediante {Datos})
export const Datos = ({children}) => {//Con esto hacemos que Datos de servicio a todos sus hijos
    const [color, setColor] = useState("Silver");
    return (//El Provider me facilita acceder a los datos
        <Contexto.Provider value={{color, setColor}}>
            {children}
        </Contexto.Provider>
    )
} 