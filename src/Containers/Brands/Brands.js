import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from './Brands.module.css';

import metamoonLogo from '../../Assets/brands/metamoon.svg';
import dottyland from '../../Assets/brands/dottyland.svg';


const Brands = () => {
	return (
		<div className={style.BrandsPage}>
			<div className={style.BrandsWrapper}>
				<BrandInfo
					brandImage={metamoonLogo}
				/>

				<BrandInfo
					brandImage={dottyland}
				/>
			</div>
		</div >)
}

export default Brands