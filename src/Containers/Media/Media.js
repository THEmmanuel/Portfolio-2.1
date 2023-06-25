import React from 'react';
import style from './Media.module.css';
import MediaCard from '../../Components/MediaCard/MediaCard';
import { MediaList } from '../../Data/MediaList';

const Media = () => {
	return (
		<div className={style.Media} id='media'>
			<div className='HeadingWrapper'>
				<div className='HeadingContainer'>
					<span className='Heading'>Media</span>
					<span className='HeadingText'>Talks, articles - general media stuff!</span>
				</div>
			</div>

			<div className={style.MediaCards}>
				{
					MediaList.map(media =>
					(
						<a href={media.link} target='blank'>
							<MediaCard
								MediaTitle={media.mediaName}
								MediaPublisher={media.mediaPublisher}
								MediaDate={media.mediaDate}
								MediaType={media.mediaType}
							/>
						</a>
					)
					)
				}
			</div>
		</div >
	)
}

export default Media