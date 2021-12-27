import React from 'react'
import style from './ContactButton.module.css'

const ConatctButton = props => {
    return (
        <button className={style.ContactButton}>
            <img src={props.ButtonIcon} alt="" />
        </button>
    )
}

export default ConatctButton;