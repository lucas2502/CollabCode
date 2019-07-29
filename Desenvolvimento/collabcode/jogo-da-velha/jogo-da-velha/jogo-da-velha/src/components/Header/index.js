import React from 'react'
import './style.css'

import Logo from '../../objects/Logo'
import Sobre from '../../objects/Sobre'
import MenuBurguer from '../../objects/MenuBurguer'


const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Sobre />
            <MenuBurguer />
        </header>
    )

}

export default Header;