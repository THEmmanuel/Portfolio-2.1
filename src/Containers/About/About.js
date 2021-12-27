import React from 'react'
import style from './About.module.css'

const About = () => {
    return (
        <section className={style.About}>
            <h2 className={style.SectionTitle}>
                About Me.
            </h2>
            <div className={style.AboutContent}>
                <img src='https://avatars2.githubusercontent.com/u/36299715?s=460&u=c1d0b9a48e10bdd64d6fe30a61e6840daf2bcd33&v=4' alt="Emmanuel Ayodele" className={style.AboutImage} />
                <div>
                    <span className={style.AboutDescription}>I've always been an artist and building websites and apps have given me the chance to mix my artistic side with my fascination for problem solving. 
                    <p/>
                    I love watching ideas flow and learning from and teaching other people things. I believe that's the best way to foster quick personal and group development.
                    <p/>
                    I have spent a lot of time trying to understand vanilla JavaScript so I should be able to learn and pick any JavaScript based framework and/or library up pretty fast.
                    <p/>
                    When I'm not coding you can find me playing video games, losing myself in a book, making illustrations or writing short stories and poems.

                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
