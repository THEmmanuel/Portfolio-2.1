import React, { useState } from 'react'
import style from './NavBar.module.css'

const NavBar = (props) => {
    const [navState, setNavState] = useState(false)

    const navToggleHandler = () => {
        setNavState(!navState)
    }

    return (
        <nav className={style.NavBar}>
            <div className = {style.NavContent}>
                <div className={style.NavLogo}>
                    
                </div>

                <div className={style.NavButton} onClick = {navToggleHandler}>
                    
                </div>
            </div>
        </nav>
    )
};

export default NavBar;