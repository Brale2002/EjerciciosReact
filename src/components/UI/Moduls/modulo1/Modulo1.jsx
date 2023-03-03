import React, {useState} from 'react'
import { Footer } from '../../../Layouts/Footer/Footer'
//import { Main } from '../../../Layouts/Main/Main'

export const Modulo1 = () => {

  const [text, setText] = useState("THE EARH IS ALIVE")

  return (
    <>
     <main>
      <div className='cont_main'>
        <p>{text}</p>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}
