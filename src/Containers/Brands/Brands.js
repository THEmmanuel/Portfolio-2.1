import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from './Brands.module.css';

import { brandsList } from '../../Data/BrandsList';


const Brands = () => {
	return (
		<div className={style.BrandsPage}>
			<div className={style.Brands}>
				<div className={style.BrandContainer}>
					<div className={style.BrandsHeadingWrapper}>
						<div className={style.BrandContainer}>
							<span className={style.BrandsHeading}>Excited to have contributed to these projects!</span>
							<span className={style.BrandsHeadingText}>And collaborated with incredible people around the world!</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							brandsList.map(brand =>
								<BrandInfo
									brandImage={brand.brandLogo}
									brandInfoText={brand.brandName}
									brandLocation={brand.brandLocation}
								/>)
						}
					</div>
				</div>

				<div className={style.BrandContainer}>
					<div className={style.BrandsHeadingWrapper}>
						<div className={style.BrandContainer}>
							<span className={style.BrandsHeading}>Excited to have contributed to these projects!</span>
							<span className={style.BrandsHeadingText}>And collaborated with incredible people around the world!</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							brandsList.map(brand =>
								<BrandInfo
									brandImage={brand.brandLogo}
									brandInfoText={brand.brandName}
									brandLocation={brand.brandLocation}
								/>)
						}
					</div>
				</div>
			</div>
		</div >)
}

export default Brands