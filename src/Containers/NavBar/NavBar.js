import React, { useState } from 'react'
import style from './NavBar.module.css'

const NavBar = (props) => {
	return (
		<nav className={style.NavBar}>
			<span className={style.NavLogo}>
				E
			</span>

			<div className={style.NavItemsContainer}>

				<span className={style.NavItem}>Home</span>

				<span className={style.NavItem}>Brands</span>

				<span className={style.NavItem}>Projects</span>

				<span className={style.NavItem}>Media</span>

				<span className={style.NavItem}>Achievements</span>

				<span className={style.NavItem}>Contact</span>
			</div>

			<span>Resume</span>
		</nav>
	)
};

export default NavBar;