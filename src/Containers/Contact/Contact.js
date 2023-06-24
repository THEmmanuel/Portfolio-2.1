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
						<button className={style.ContactButton}>
							<EnvelopeSimple
								size={32}
								weight="thin"
								color={iconColour}
							/>
							Send a mail!
						</button>

						<button className={style.ContactButton}>
							<DiscordLogo
								size={32}
								weight="thin"
								color={iconColour}
							/>
							Let's chat on Discord!
						</button>
					</div>

					<div className={style.SocialButtonsWrapper}>
						<span className='HeadingText'>Socials</span>

						<div className={style.SocialButtons}>
							<button className={style.SocialButton}>
								<LinkedinLogo
									size={32}
									weight="thin"
									color={iconColour} />
								LinkedIn
							</button>

							<button className={style.SocialButton}>
								<GithubLogo
									size={32}
									weight="thin"
									color={iconColour} />
								GitHub
							</button>

							<button className={style.SocialButton}>
								<TwitterLogo
									size={32}
									weight="thin"
									color={iconColour} />
								Twitter
							</button>


							<button className={style.SocialButton}>
								<DribbbleLogo
									size={32}
									weight="thin"
									color={iconColour} />
								Dribbble
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact