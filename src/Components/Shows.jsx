import { useState } from "react"
import {espectaculos} from "../utils/espectaculos"
import Espectaculo from "./Espectaculo"
import Form from "./Form";

const Shows = () => {
    const [selected, setSelected] = useState(null); //acá se pone null porque se sabe que va a devolver un objeto
    console.log(selected);
    
  return (
    <div>
        {selected ? <Form show={selected}/>: null}
        {espectaculos.map((espectaculo)=>(
        <Espectaculo 
        key={espectaculo.id} 
        espectaculo={espectaculo}
        setSelected={setSelected}
        ></Espectaculo>
    ))}</div>
  )
}

export default Shows