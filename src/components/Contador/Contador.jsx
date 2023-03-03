import '../../assets/css_styles/cuadro.css'
import React, { useState } from 'react'

export const Contador = () => {

    const [counter, setCounter] = useState(0)
  return (
    <>
    <div className="contenidoCount">

        <div className="cont_main">
            <h1>{counter}</h1> 
        </div>

        <div className="buttons">
            <button onClick={()=>setCounter(counter+1)}>Add</button>    
            <button onClick={()=>setCounter(0)}>Reset</button>    
            <button onClick={()=>setCounter(counter-1)}>Sudmit</button>    
        </div>   

    </div>
    </>
  )
}
