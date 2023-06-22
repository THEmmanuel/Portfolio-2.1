import React from 'react';
import style from './BrandInfo.module.css';

const BrandInfo = (props) => {
	return (
		<div className={style.BrandInfoWrapper}>
			<span className={style.BrandImage}>Brand Image</span>
			<span className={style.BrandName}>Brand name</span>
		</div>
	)
}

export default BrandInfo