import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className = {style.Footer}>
            <span className = {style.FooterText}>
                2022 | Emmanuel Ayodele Bello
            </span>
        </footer>
    )
}

export default Footer;