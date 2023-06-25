import React, { useState } from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-scroll';
import {
	GoogleDriveLogo
} from "@phosphor-icons/react";

const NavBar = (props) => {
	return (
		<nav className={style.NavBar}>
			<span className={style.NavLogo}>
				E
			</span>

			<div className={style.NavItemsContainer}>
				<Link to='home' smooth='true'>
					<span className={style.NavItem}>Home</span>
				</Link>

				<Link to='brands' smooth='true'>
					<span className={style.NavItem}>Brands</span>
				</Link>

				<Link to='portfolio' smooth='true'>
					<span className={style.NavItem}>Projects</span>
				</Link>

				<Link to='media' smooth='true'>
					<span className={style.NavItem}>Media</span>
				</Link>

				<Link to='achievements' smooth='true'>
					<span className={style.NavItem}>Achievements</span>
				</Link>

				<Link to='contact' smooth='true'>
					<span className={style.NavItem}>Contact</span>
				</Link>
			</div>

			<a href="https://drive.google.com/file/d/1IsXWBpqMs-a8oSLRK4HfHWHUJEWAR7pf/view" target="_blank" rel="noopener noreferrer">
				<div className={style.NavItemWrapper}>
					<span className={style.NavItem}>Resume</span>
					<GoogleDriveLogo size={25} color="#b8b8b8" weight="thin" />
				</div>
			</a>
		</nav>
	)
};

export default NavBar;