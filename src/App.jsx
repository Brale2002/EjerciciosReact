import { Home } from './components/Pages/Home'
import { Routes, Route } from 'react-router-dom'
import { NotFount } from './components/NotFound/NotFount'
import { Modulo1 } from './components/modulo1/Modulo1'
import { Modulo2 } from './components/modulo2/Modulo2'
import { Modulo3 } from './components/modulo3/Modulo3'

import { Header } from './components/Layouts/Header/Header'

function App() {
  return (
    <>
    <div className="App">
      <header>
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Modulo1" element={<Modulo1/>} />
        <Route path="/Modulo2" element={<Modulo2/>} />
        <Route path="/Modulo3" element={<Modulo3/>} />
        <Route path="/" element={<NotFount/>} />
      </Routes>
    </div>
    
    </>
  )
}

export default App
