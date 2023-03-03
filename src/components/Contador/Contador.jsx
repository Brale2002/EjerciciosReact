import '../../assets/css_styles/cuadro.css'
import React, { useEffect, useState } from 'react'
import './counter.css'

export const Contador = () => {

    const [counter, setCounter] = useState(0)
    const [style, setStyle] = useState('red')
    const [colorCaja, setColorCaja] = useState('azul')

    useEffect(() =>{
      if (counter >= 10) {
        setStyle('green')
      }else{
        setStyle('red')
      }
    }, [counter])

    useEffect(()=>{
      let color = prompt("Ingrese un color: \n(azul, morado, verde)")
      switch (color) {
        case "verde":
          setColorCaja('verde')
          break;
        case "morado":
          setColorCaja('morado')
          break
        case "azul":
          setColorCaja('azul')
          break
        default: alert("El color no esta en la lista")
        setColorCaja('blanco')
          break;
      }
    },[])

  return (
    <>
    <div className="contenidoCount">
    <div className={colorCaja}></div>

        <div className={style}>
            <h1>{counter}</h1> 
        </div>

        <div className="buttons">
            <button onClick={()=>setCounter(counter+1)}>Add</button>    
            <button onClick={()=>setCounter(0)}>Reset</button>    
            <button onClick={()=>setCounter(counter-1)}>Sudmit</button>    
            <button onClick={()=>{location.reload()}}>cambiar color</button>    
        </div>   

    </div>
    </>
  )
}
