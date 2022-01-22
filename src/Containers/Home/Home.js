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
                            I'm a software engineer with close to 5 years of experience. Currently focued on building front-end web and mobile experiences that perform and scale. Looking to contribute to the future of the internet through Web 3.0
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
