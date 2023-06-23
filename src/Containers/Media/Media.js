import React from 'react';
import style from './Media.module.css';
import MediaCard from '../../Components/MediaCard/MediaCard';
import { MediaList } from '../../Data/MediaList';

const Media = () => {
	return (
		<div className={style.Media}>
			<h2 className='SectionTitle'>
				Talks and Publications
			</h2>

			<div className={style.MediaCards}>
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
		</div>
	)
}

export default Media