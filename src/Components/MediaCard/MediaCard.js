import React from 'react';
import style from './MediaCard.module.css';

const MediaCard = (props) => {
	return (
		<div className={style.MediaCard}>
			<div className={style.MediaCardWrapper}>
				<span className={style.MediaTitle}>{props.MediaTitle}</span>
				<span className={style.MediaPublisher}>{props.MediaPublisher}</span>
				<span className={style.MediaDate}>{props.MediaDate} | {props.MediaType}</span>
			</div>
		</div>
	)
}

export default MediaCard