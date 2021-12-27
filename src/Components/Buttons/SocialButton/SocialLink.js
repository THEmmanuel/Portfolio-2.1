import React from 'react';
import style from './SocialLink.module.css'

const SocialLink = (props) =>
    <a href = {props.link} className = {style.SocialLink} target = '_blank' rel = 'noopener noreferrer'>
            <img src={props.icon} alt="Social Icon" className = {style.SocialIcon}/>
    </a>

export default SocialLink;