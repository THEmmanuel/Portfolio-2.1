import React from 'react';
import style from './Work.module.css';


const Work = () => {
    return (
        <section className={style.Work}>
            <h2 className={style.SectionTitle}>
                Work Experience.
            </h2>
            <div className={style.WorkExperiences}>

                <div className={style.WorkExperience}>
                    <div className={style.WorkExperienceContainer}>
                        <span className={style.WorkExperienceTitle}>
                            Colture (Branding Agency)
                        </span>

                        <span className={style.WorkExperienceRole}></span>
                        Contract Front-end Developer
                        <span>

                        </span>

                        <span />
                        <span className={style.WorkExperienceDescription}>
                            <ul>
                                <li>Spearheaded the development process by implementing UI mockups with WordPress, Elementor and PHP</li>
                                <li>Created Elementor templates and implementing custom feature requirements by setting up WordPress plugins.</li>
                                <li>Resolved plugin conflicts by debugging template code and reorganizing site structure</li>
                                <li>Collaborated with the CTO by drafting scalable UX strategies, content direction and project development plan.</li>
                                <li>Leveraged knowledge in WordPress, Elementor. Programmed in PHP, CSS and JavaScript in CPanel, and debugged using Chrome Developer Tools</li>
                            </ul>
                        </span>
                    </div>

                    <div className={style.WorkTimelineIndicator}>
                        <div className={style.TimeIndicator}></div>
                        <span className={style.line} ></span>
                        <div className={`${style.TimeIndicator} ${style.Filled} `}>
                            <div className={style.InnerCircle}></div>
                        </div>
                    </div>

                    {/* ● Increased process efficiency by leading UX researches for mockup designs.
● Designed and built sections of the Run IT app with Adobe XD and React native.
● Improved dispatch efficiency by visualizing analytics data with D3.js.
● Integrated RESTful APIs by collaborating remotely with other teammates.
● Leveraged knowledge in Mobile App Development. JavaScript, React native, git, D3.js and debugged using 
React developer tools. */}



                    <div className={`${style.WorkExperience02} ${style.WorkExperienceContainer}`}>
                        <span className={style.WorkExperienceTitle}>
                            Run It (Logistics Service)
                        </span>

                        <span className={style.WorkExperienceRole}></span>
                        Front-end/Mobile developer, Contract
                        <span>

                        </span>

                        <span />
                    

                        <span className={style.WorkExperienceDescription}>
                            <ul>
                                <li>Increased process efficiency by leading UX researches for mockup designs.</li>
                                <li>Designed and built sections of the Run IT app with Adobe XD and React native.</li>
                                <li>Improved dispatch efficiency by visualizing analytics data with D3.js.</li>
                                <li>Integrated RESTful APIs by collaborating remotely with other teammates.</li>
                                <li>Leveraged knowledge in Mobile App Development. JavaScript, React native, git, D3.js and debugged using
                                    React developer tools.</li>
                            </ul>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Work;