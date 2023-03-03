import React from 'react'
import { useState } from 'react'
import '../../assets/css_styles/cuadro.css'

export const CuadroTexto = () => {

  const [text, setText] = useState("THE EARH IS ALIVE")

  return (
    <>
    <div className='cont_main'>
      <p>{text}</p>
    </div>
    </>
  )
}
