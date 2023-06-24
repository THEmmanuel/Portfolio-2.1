import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';

import {
	EnvelopeSimple,
	DiscordLogo,
	LinkedinLogo,
	GithubLogo,
	TwitterLogo,
	DribbbleLogo
} from "@phosphor-icons/react";

const iconColour = '#606060'

const Contact = (props) => {
	return (
		<section className={style.Contact} id='contact'>
			<div className='HeadingWrapper'>
				<div className='HeadingContainer'>
					<span className='Heading'>Contact</span>
					<span className='HeadingText'>Say hi, Let's rock! 🤘🏾</span>
				</div>
			</div>


			<div className={style.ContactContent}>
				<div className={style.ContactWrapper}>
					<div className={style.MainContactButtons}>
						<a href="mailto:emmayodayo@gmail.com">
							<button className={style.ContactButton}>
								<EnvelopeSimple
									size={32}
									weight="thin"
									color={iconColour}
								/>
								Send a mail!
							</button>
						</a>

						<a href="https://discord.com/users/ayxdele">
							<button className={style.ContactButton}>
								<DiscordLogo
									size={32}
									weight="thin"
									color={iconColour}
								/>
								Let's chat on Discord! @ayxdele
							</button>
						</a>
					</div>

					<div className={style.SocialButtonsWrapper}>
						<span className='HeadingText'>Socials</span>

						<div className={style.SocialButtons}>
							<a href="https://www.linkedin.com/in/emmanuxl" target='blank'>
								<button className={style.SocialButton}>
									<LinkedinLogo
										size={32}
										weight="thin"
										color={iconColour} />
									LinkedIn
								</button>
							</a>

							<a href="https://github.com/THEmmanuel" target='blank'>
								<button className={style.SocialButton}>
									<GithubLogo
										size={32}
										weight="thin"
										color={iconColour} />
									GitHub
								</button>
							</a>

							<a href="https://twitter.com/ayxdele" target='blank'>
								<button className={style.SocialButton}>
									<TwitterLogo
										size={32}
										weight="thin"
										color={iconColour} />
									Twitter
								</button>
							</a>

							<a href="https://dribbble.com/TH3mmanuel" target='blank'>
								<button className={style.SocialButton}>
									<DribbbleLogo
										size={32}
										weight="thin"
										color={iconColour} />
									Dribbble
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact