import React from 'react';
import style from '../PrimaryCTA/PrimaryCTA.module.css'

const HomePrimaryCTA = (props) => {
    return (
        <button className={style.PrimaryCTA}>
            {props.text}
        </button>
    )
}

export default HomePrimaryCTA;