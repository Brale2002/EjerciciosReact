import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="nav">
        <ul>
            <li><NavLink to="/Modulo1">Module1</NavLink></li>
            <li><NavLink to="/Modulo2">Module2</NavLink></li>
            <li><NavLink to="/Modulo3">Module3</NavLink></li>
        </ul>
    </nav>
  )
}
