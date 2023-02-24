import React from 'react'
import '../../../assets/css_styles/footer.css'

import {Icon_Facebook} from '../../UI/Icons/Icon_Facebook'
import { Icon_Insta } from '../../UI/Icons/Icon_Insta'
import { Icon_Twitter } from '../../UI/Icons/Icon_Twitter'

export const Footer = () => {
  return (
    <div className='cont_footer'>  
        <div className="icons">
        <Icon_Facebook /> 
        <Icon_Insta />
        <Icon_Twitter />
        </div>
        <p>Planet ~ Life ~ Home</p>
        <p>&copy; 2023</p>
    </div>
  )
}
    