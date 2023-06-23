import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';

import {
	EnvelopeSimple,
	DiscordLogo
} from "@phosphor-icons/react";

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
								color="#FFF"
							/>
							Send a mail!
						</button>

						<button className={style.ContactButton}>
							<DiscordLogo

								size={32}
								weight="thin"
								color="#FFF"
							/>
							Let's chat on Discord!
						</button>
					</div>

					<div className={style.SocialButtons}>
						<button className={style.ContactButton}>
							<DiscordLogo

								size={32}
								weight="thin"
								color="#FFF"
							/>
							Let's chat on Discord!
						</button>

						<button className={style.ContactButton}>
							<DiscordLogo

								size={32}
								weight="thin"
								color="#FFF"
							/>
							Let's chat on Discord!
						</button>

						<button className={style.ContactButton}>
							<DiscordLogo

								size={32}
								weight="thin"
								color="#FFF"
							/>
							Let's chat on Discord!
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact