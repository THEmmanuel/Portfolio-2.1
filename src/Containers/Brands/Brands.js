import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from './Brands.module.css';

import metamoonLogo from '../../Assets/brands/metamoon.svg';
import dottyland from '../../Assets/brands/dottyland.svg';


const Brands = () => {
	return (
		<div className={style.BrandsPage}>
			<div className={style.Brands}>
				<div className={style.BrandContainer}>
					<div>
						<span className={style.BrandsHeading}>Excited to have contributed to these projects!</span>
						<span className={style.BrandsHeadingText}>And collaborated with incredible people around the world!</span>
					</div>

					<div className={style.BrandsWrapper}>
						<BrandInfo
							brandImage={metamoonLogo}
							brandInfoText='Test'
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

						<BrandInfo
							brandImage={metamoonLogo}
						/>
					</div>
				</div>
			</div>
		</div >)
}

export default Brands