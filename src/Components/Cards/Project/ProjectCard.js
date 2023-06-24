import React from 'react';
import style from './ProjectCard.module.css';
import Tilt from 'react-parallax-tilt';

//Icon imports


import csharp from '../../../Assets/icons/csharp.png'
import css from '../../../Assets/icons/css.png'
import node from '../../../Assets/icons/node.png'

const ProjectCard = props => {

	const ImageContainerStyle = {
		backgroundColor: props.ProjectColor
	}

	return (
		<div className={style.ProjectCardContainer}>
			<div className={style.ProjectCard}>
				<div className={style.ProjectContainer}>
					<div className={style.ProjectContent}>
						<span>
							Tech stack
						</span>

						<span className={style.ProjectTitle}>
							{props.ProjectName}
						</span>

						<span className={style.ProjectDescription}>
							{props.ProjectDescription}
						</span>

						<div className={style.ProjectStackContainer}>
							<div className={style.ProjectStackWrapper}>
								<span>icon</span>
								<span className={style.ProjectStack}>
									view demo
								</span>
							</div>

							<div className={style.ProjectStackWrapper}>
								<span>icon</span>
								<span className={style.ProjectStack}>
									view demo
								</span>
							</div>

							<div className={style.ProjectStackWrapper}>
								<span>icon</span>
								<span className={style.ProjectStack}>
									view demo
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectCard;