import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';

const Contact = (props) => {
	return (
		<section className={style.Contact} id='contact'>
			<h2 className={style.SectionTitle}>
				Contact me
			</h2>
			<div className={style.ContactContent}>
				<div className={style.ContactText}>

					<h1 className={style.ContactHeading}>Say Hi.</h1>
					<br />
					Let's BUILD something awesome together.
				</div>

				<div className={style.ContactButtons}>
					<a href="mailto:emmayodayo@gmail.com" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/mail.png' />
					</a>

					{/* <a href="https://www.linkedin.com/in/emmanuxl/" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/linkedin.png' />
					</a> */}

					<a href="https://twitter.com/ayxdele" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/twitter.png' />
					</a>

					<a href="https://www.instagram.com/th3mmanuel.exe/" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/instagram.png' />
					</a>

					<a href="https://www.github.com/themmanuel" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/github.png' />
					</a>

					<a href="https://www.dribbble.com/th3mmanuel/" target="_blank" rel="noopener noreferrer">
						<ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/dribbble.png' />
					</a>
				</div>

				{/* <div className={style.ButtonContainer}>
					<a href="https://drive.google.com/file/d/1e2mG5F8i8B8bAZU9YjpkcYOG4qbKz1OC/view" target="_blank" rel="noopener noreferrer">
						<HomePrimaryCTA text='Resume' />
					</a>
				</div> */}

			</div>
		</section>
	)
}

export default Contact