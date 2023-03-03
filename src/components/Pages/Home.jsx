import React from 'react'

//import {Main} from '../Layouts/Main/Main'
import {Footer} from '../Layouts/Footer/Footer'
import {Contador} from '../Contador/Contador'


export const Home = () => {
  return (
    <>
    <main>
      <Contador />
    </main>
    <footer>
      <Footer />
    </footer>
      
    </>
  )
}