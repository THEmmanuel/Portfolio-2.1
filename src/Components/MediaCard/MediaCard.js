import React from 'react';
import style from './MediaCard.module.css';

const MediaCard = () => {
	return (
		<div className={style.MediaCard}>
			<div className={style.MediaCardWrapper}>
				<span>Article Title</span>
				<span>Article publisher</span>
				<span>Article date</span>
			</div>
		</div>
	)
}

export default MediaCard