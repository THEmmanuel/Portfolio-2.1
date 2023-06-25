import React from 'react';
import BrandInfo from '../../Components/BrandInfo/BrandInfo';
import style from '../Brands/Brands.module.css'

import { AchievementsList, CertificationsList } from '../../Data/AchievementsList';

const Achievements = () => {
	return (
		<div className={style.BrandsPage} id='achievements'>
			<div className={style.Brands}>
				<div className={style.BrandContainer}>
					<div className='HeadingWrapper'>
						<div className='HeadingContainer'>
							<span className='Heading'>Certifications amd Achievements</span>
							<span className='HeadingText'>Certifications etc</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							CertificationsList.map(brand =>
								<a href={brand.link} target='blank'>									<BrandInfo
									brandImage={brand.brandLogo}
									brandInfoText={brand.brandName}
									brandLocation={brand.brandLocation}
								/>
								</a>
							)
						}
					</div>
				</div>

				<div className={style.BrandContainer}>
					<div className={style.BrandsHeadingWrapper}>
						<div className='HeadingContainer'>
							<span className='Heading'>Achievements</span>
							<span className='HeadingText'>Stuff I'm proud to share!</span>
						</div>
					</div>

					<div className={style.BrandsWrapper}>
						{
							AchievementsList.map(brand =>
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

export default Achievements