import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';

const Contact = (props) => {
	return (
		<section className={style.Contact} id='contact'>
			<h2 className='SectionTitle'>
				Contact me
			</h2>
			<div className={style.ContactContent}>
				<div>
					<button>test</button>
					<div>
						<button>dkdk</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact