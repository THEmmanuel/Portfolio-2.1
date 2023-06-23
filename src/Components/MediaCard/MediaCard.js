import React from 'react';
import style from './MediaCard.module.css';

const MediaCard = () => {
	return (
		<div className={style.MediaCard}>
			<div className={style.MediaCardWrapper}>
				<span className={style.MediaTitle}>Article Title</span>
				<span className={style.MediaPublisher}>Article publisher</span>
				<span className={style.MediaDate}>Article date | Type</span>
			</div>
		</div>
	)
}

export default MediaCard