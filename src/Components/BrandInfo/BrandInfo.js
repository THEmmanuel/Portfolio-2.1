import React from 'react';
import style from './BrandInfo.module.css';

const BrandInfo = (props) => {
	return (
		<div className={style.BrandInfoWrapper}>
			<img src={props.brandImage} alt="" className={style.BrandImage}/>
			<span className={style.BrandInfo}>{props.brandInfoText}</span>
			<span className={style.BrandInfo}>{props.brandLocation}</span>
		</div>
	)
}

export default BrandInfo