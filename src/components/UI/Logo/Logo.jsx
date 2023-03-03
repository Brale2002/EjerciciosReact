import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () =>{

    const logo = 'https://res.cloudinary.com/dizdeup2a/image/upload/v1677245045/main_react/tcpu1utybjivpqj8zfq4.jpg'

    return(
        <>
        <Link to="/">
        <img id="logo" src={logo} alt="logotipo"/>
        </Link>
        </>
    )
}