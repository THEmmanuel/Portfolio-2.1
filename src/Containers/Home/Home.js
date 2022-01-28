import React from 'react';
import style from './Home.module.css';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';
import HomeSecondaryCTA from '../../Components/Buttons/HomeSecondaryCTA/HomeSecondaryCTA';
import SocialLink from '../../Components/Buttons/SocialButton/SocialLink';
import { Link } from 'react-scroll';


const Home = (props) => {
    return (
        <section className={style.Home} id='home'>
            <section className={style.Introduction}>
                <div className={style.IntroductionContainer}>
                    <div className={style.IntroductionText}>
                        <article className={style.NameIntroduction}>
                            Hello, I'm Emmanuel Bello.
                        </article>

                        <article className={style.ProfessionalSummary}>
                            I'm a software engineer with 5 years of experience. Freelancing since 2018. I currently focus on building front-end web and mobile experiences that perform and scale. Exploring open source as well.
                            <p/>
                            In my free time, I'm a prolific reader and an avid gamer with a wide array of interests.
                        </article>
                    </div>

                    <div className={style.Buttons}>
                        <Link to='portfolio' smooth='true'>
                            <HomePrimaryCTA text='My Work' />
                        </Link>
                        
                        <Link to='contact' smooth='true'>
                            <HomeSecondaryCTA text='Contact Me' />
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Home;
