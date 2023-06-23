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
			<Tilt
				perspective={9800}
				transitionSpeed={10000}
				gyroscope={true}
				glareEnable={true}
				glareColor={props.ProjectColor}
			>

				<div className={style.ProjectCard}>
					<div className={style.ProjectContainer}>
						<div className={style.ImageContainer}>
							<div className={style.IconContainer}
								style={ImageContainerStyle}>
								<img src={props.ProjectImage} alt="" className={style.ProjectImage} />
							</div>
						</div>

						<div className={style.ProjectContent}>
							<span className={style.ProjectTitle}>
								{props.ProjectName}
							</span>

							<span className={style.ProjectDescription}>
								{props.ProjectDescription}
							</span>

							<div className={style.StackIcons}>
								{props.ProjectTechnologies.map((project) =>
									<img className={style.StackIcon} src={project} alt="" />)
								}
							</div>
						</div>
					</div>
				</div>
			</Tilt>
		</div>
	)
};

export default ProjectCard;