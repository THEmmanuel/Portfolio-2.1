import React from 'react';
import style from './BrandInfo.module.css';

const BrandInfo = (props) => {
	return (
		<div className={style.BrandInfoWrapper}>
			<img src={props.brandImage} alt="" />
			<span className={style.brand}>{props.brandInfoText}</span>
		</div>
	)
}

export default BrandInfo