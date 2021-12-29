import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';

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

                    <a href="https://www.linkedin.com/in/lunartik42/" target="_blank" rel="noopener noreferrer">
                        <ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/linkedin.png' />
                    </a>

                    <a href="https://twitter.com/Lunartik_42" target="_blank" rel="noopener noreferrer">
                        <ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/twitter.png' />
                    </a>

                    <a href="https://www.instagram.com/th3mmanuel.exe/" target="_blank" rel="noopener noreferrer">
                        <ContactButton ButtonIcon='https://img.icons8.com/ios-filled/25/C1C1C1/instagram.png' />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Contact