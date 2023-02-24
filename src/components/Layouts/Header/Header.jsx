import React from 'react'
import '../../../assets/css_styles/header.css'

import {Logo} from '../../UI/Logo/Logo'
import {Navbar} from '../../UI/Nav/Navbar'
import {Button} from '../../UI/Button/Button'

export const Header = () => {
  return (
    <>
        <Logo />
        <Navbar />
        <Button />
    </>
  )
}