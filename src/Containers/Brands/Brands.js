import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from './Brands.module.css';

import { brandsList, programList, openSourceList } from '../../Data/BrandsList';

const Brands = () => {
	return (
		<div className={style.BrandsPage} id='brands'>
			<div className={style.Brands}>
				<div className={style.BrandContainer}>
					<div className='HeadingWrapper'>
						<div className='HeadingContainer'>
							<span className='Heading'>Excited to have contributed to these projects!</span>
							<span className='HeadingText'>And collaborated with incredible people around the world! 🫱🏾‍🫲🏽</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							brandsList.map(brand =>
							(
								<a href={brand.link} target='blank'>
									<BrandInfo
										brandImage={brand.brandLogo}
										brandInfoText={brand.brandName}
										brandLocation={brand.brandLocation}
									/>
								</a>
							)
							)
						}
					</div>
				</div>

				<div className={style.BrandContainer}>
					<div className={style.BrandsHeadingWrapper}>
						<div className={style.BrandContainer}>
							<span className='HeadingText'>Grateful to be a part of these communiites 🙏🏾</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							programList.map(brand =>
							(
								<a href={brand.link} target='blank'>
									<BrandInfo
										brandImage={brand.brandLogo}
										brandInfoText={brand.brandName}
										brandLocation={brand.brandLocation}
									/>
								</a>
							)
							)
						}
					</div>
				</div>


				<div className={style.BrandContainer}>
					<div className={style.BrandsHeadingWrapper}>
						<div className={style.BrandContainer}>
							<span className='HeadingText'>
								Open source contributions 💻
							</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							openSourceList.map(brand =>
							(
								<a href={brand.link} target='blank'>
									<BrandInfo
										brandImage={brand.brandLogo}
										brandInfoText={brand.brandName}
										brandLocation={brand.brandLocation}
									/>
								</a>
							)
							)
						}
					</div>
				</div>
			</div>
		</div >)
}

export default Brands