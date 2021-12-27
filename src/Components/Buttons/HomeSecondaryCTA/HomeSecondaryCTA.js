import React from 'react';
import style from '../SecondaryCTA/SecondaryCTA.module.css';


const HomeSecondaryCTA = (props) => {
    return (
                <button className={style.SecondaryCTA}>
                    {props.text}
                </button>
    )
}

export default HomeSecondaryCTA;