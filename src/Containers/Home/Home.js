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

						<span className={style.WorkTitle}>Senior Fullstack Software Engineer. User Interface Specialist.</span>

						<article className={style.ProfessionalSummary}>
							Senior Software Engineer with 6+ years of experience. My experience working with brands and startups accross multiple fields around the globe combined with my actively curious and experimental nature gives me unique & valuable insights and expertise.
							<p />
							Received multiple software certifications. Educational background in Quantity Surveying and Construction Cost Management.

							<p />
							2x global Hackathon winner. Building Calcium - Stryd (Microsoft Startups Partner) and Project Kinetic (achieved 200x revenue growth since 2018).
							<p />
							In my free time, I play video games, read books and goof around with my various hobbies and buddies.
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
