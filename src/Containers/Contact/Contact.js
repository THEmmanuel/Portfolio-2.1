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
			<h2 className='SectionTitle'>
				Contact me
			</h2>
			<div className={style.ContactContent}>
				<div>
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
		</section>
	)
}

export default Contact