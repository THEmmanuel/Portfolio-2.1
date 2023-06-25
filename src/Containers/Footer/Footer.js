import React from 'react';
import style from './Footer.module.css'


const d = new Date();
let year = d.getFullYear();

const Footer = () => {
    return (
        <footer className = {style.Footer}>
            <span className = 'HeadingText'>
			© {year} | Emmanuel Ayodele Bello | All Rights Reserved
            </span>

			<span className = 'HeadingText'>
			© All trademarks and logos are for presentation purposes only. They are properties of their respective owners.
            </span>
        </footer>
    )
}

export default Footer;