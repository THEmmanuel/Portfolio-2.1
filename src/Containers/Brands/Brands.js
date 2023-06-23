import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from './Brands.module.css';

import metamoonLogo from '../../Assets/brands/metamoon.svg';
import dottyland from '../../Assets/brands/dottyland.svg';


const Brands = () => {
	return (
		<div className={style.BrandsPage}>
			<div className={style.BrandContainer}>
				<div>
					<span className={style.BrandsHeading}>HDHDHD</span>
					<span className={style.BrandsHeadingText}>dhjhdhdh</span>
				</div>

				<div className={style.BrandsWrapper}>
					<BrandInfo
						brandImage={metamoonLogo}
					/>

					<BrandInfo
						brandImage={dottyland}
					/>

					<BrandInfo
						brandImage={dottyland}
					/>

					<BrandInfo
						brandImage={dottyland}
					/>

					<BrandInfo
						brandImage={metamoonLogo}
					/>
				</div>
			</div>
		</div >)
}

export default Brands