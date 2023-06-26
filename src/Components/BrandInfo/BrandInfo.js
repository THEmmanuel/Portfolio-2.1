import React from 'react';
import style from './BrandInfo.module.css';

const BrandInfo = (props) => {
	return (
		<div className={style.BrandInfoWrapper}>
			<img src={props.brandImage} alt="" className={style.BrandImage} />
			<div>
				<span className={style.BrandInfo}>{props.brandInfoText}</span>
				<span className={style.BrandLocation}>{props.brandLocation}</span>
			</div>
		</div>
	)
}

export default BrandInfo;