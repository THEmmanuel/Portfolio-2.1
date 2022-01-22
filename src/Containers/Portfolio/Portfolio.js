import React from 'react';
import style from './Portfolio.module.css';
import ProjectCard from '../../Components/Cards/Project/ProjectCard';
import ProjectList from '../../Data/ProjectList';

const Portfolio = () => {
    return (
        <section className={style.Portfolio} id='portfolio'>
            <h2 className={style.SectionTitle}>
                Selected Projects.
            </h2>

            <div className={style.ProjectCardContianer}>
                {ProjectList.map((project) =>
                    <a href={project.ProjectLiveLink} target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                            ProjectName={project.ProjectName}
                            ProjectImage={project.ProjectImage}
                            ProjectDescription={project.ProjectDescription}
                            ProjectTechnologies={project.ProjectTechnologies}
                            ProjectLiveLink={project.ProjectLiveLink}
                            ProjectColor={project.ProjectColor}
                            key={project.ProjectID}
                        />
                    </a>
                )}
            </div>
        </section>

    )
}

export default Portfolio;