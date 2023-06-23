import React from 'react';
import style from './Media.module.css';
import MediaCard from '../../Components/MediaCard/MediaCard';
import { MediaList } from '../../Data/MediaList';

const Media = () => {
	return (
		<div className={style.MediaCards}>
			Media
			{
				MediaList.map(media =>
					<MediaCard
						MediaTitle={media.mediaName}
						MediaPublisher={media.mediaPublisher}
						MediaDate={media.mediaDate}
						MediaType={media.mediaType}
					/>)
			}
		</div>
	)
}

export default Media