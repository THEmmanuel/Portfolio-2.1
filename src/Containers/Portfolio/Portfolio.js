import React from 'react';
import style from './Portfolio.module.css';
import ProjectCard from '../../Components/Cards/Project/ProjectCard';
import ProjectList from '../../Data/ProjectList';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';

const Portfolio = () => {
	return (
		<section className={style.Portfolio} id='portfolio'>
			<h2 className='Heading'>
				Selected Projects
			</h2>

			<div className={style.ProjectCardContianer}>
				{ProjectList.map((project) =>
					<ProjectCard
						ProjectCategory={project.ProjectCategory}
						ProjectName={project.ProjectName}
						ProjectImage={project.ProjectImage}
						ProjectDescription={project.ProjectDescription}
						ProjectTechnologies={project.ProjectTechnologies}
						ProjectLiveLink={project.ProjectLiveLink}
						ProjectDemoLink={project.ProjectDemoLink}
						ProjectRepoLink={project.ProjectRepoLink}
						ProjectColor={project.ProjectColor}
						key={project.ProjectID}
					/>
				)}
			</div>

		</section>

	)
}

export default Portfolio;



{/* <a href={project.ProjectLiveLink} target="_blank" rel="noopener noreferrer"> */ }
