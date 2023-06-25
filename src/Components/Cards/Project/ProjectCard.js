import React from 'react';
import style from './ProjectCard.module.css';

//Icon imports
import {
	VideoCamera,
	Eye,
	GithubLogo,
	Code
} from "@phosphor-icons/react";


const ProjectCard = props => {

	const ImageContainerStyle = {
		backgroundColor: props.ProjectColor
	}

	return (
		<div className={style.ProjectCardContainer}>
			<div className={style.ProjectCard}>
				<div className={style.ProjectContainer}>
					<div className={style.ProjectContent}>
						<span className={style.ProjectCategory}>
							{props.ProjectCategory}
						</span>

						<span className={style.ProjectTitle}>
							{props.ProjectName}
						</span>

						<span className={style.ProjectDescription}>
							{props.ProjectDescription}
						</span>

						<div className={style.ProjectStackContainer}>
							<a
								href={props.ProjectLiveLink}
								target='blank'>
								<div className={style.ProjectStack}>
									<div className={style.ProjectActionWrapper}>
										<Eye size={18} color="#b8b8b8" weight="thin" />
										<span className={style.ProjectAction}>
											Live
										</span>
									</div>
								</div>
							</a>

							<a href={props.ProjectDemoLink} target='blank'>
								<div className={style.ProjectStack}>
									<div className={style.ProjectActionWrapper}>
										<VideoCamera size={18} color="#b8b8b8" weight="thin" />
										<span className={style.ProjectAction}>
											Demo
										</span>
									</div>
								</div>
							</a>

							<a href={props.ProjectRepoLink} target='blank'>
								<div className={style.ProjectStack}>
									<div className={style.ProjectActionWrapper}>
										<Code size={18} color="#b8b8b8" weight="thin" />
										<span className={style.ProjectAction}>
											Code
										</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProjectCard;