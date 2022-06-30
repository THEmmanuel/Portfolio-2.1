import React, { useState } from 'react'
import style from './NavBar.module.css'

const NavBar = (props) => {
    return (
        <nav className={style.NavBar}>
            <div className={style.NavItem}>
                <span>01</span>
                <div className={style.LineContainer}>
                    <div className={style.Line}></div>
                </div>
                <div>Projects</div>
            </div>

            <div className={style.NavItem}>
                <span>02</span>
                <div className={style.LineContainer}>
                    <div className={style.Line}></div>
                </div>
                <div>Experience</div>
            </div>

            <div className={style.NavItem}>
                <span>03</span>
                <div className={style.LineContainer}>
                    <div className={style.Line}></div>
                </div>
                <div>Contact</div>
            </div>

            <div className={style.NavItem}>
                <span>04</span>
                <div className={style.LineContainer}>
                    <div className={style.Line}></div>
                </div>
                <div>Resume</div>
            </div>
        </nav>
    )
};

export default NavBar;