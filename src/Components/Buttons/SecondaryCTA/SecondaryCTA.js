import React from 'react';
import style from './SecondaryCTA.module.css'


const SecondaryCTA = (props) => {
    return (
            <a href={props.link} target='_blank' rel = 'noopener noreferrer'>
                <button className={style.SecondaryCTA}>
                    {props.text}
                </button>
            </a>
    )
}

export default SecondaryCTA;