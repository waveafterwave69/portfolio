import styles from './styles.module.scss'

import aboutMeImg from '../../img/about-me/about-me-img.png'

export default function AboutMe() {
    return (
        <>
            <div className={styles.about}>
                <div className="container">
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h3 className={styles.title} data-aos="flip-up">
                                Обо мне
                            </h3>
                            <div className={styles.info} data-aos="zoom-in">
                                <h5 className={styles.info__title}>Hello!</h5>
                                <p className={styles.info__text}>
                                    My name is Sinan and I specialize in web
                                    developement that utilizes HTML, CSS, JS,
                                    and REACT etc. I am a highly motivated
                                    individual and eternal optimist dedicated to
                                    writing clear, concise, robust code that
                                    works. Striving to never stop learning and
                                    improving. When I'm not coding, I am writing
                                    bolgs, reading, or picking up some new
                                    hands-on art project like photography. I
                                    like to have my perspective and belief
                                    systems challenged so that I see the world
                                    through new eyes.
                                </p>
                            </div>
                        </div>
                        <img
                            data-aos="zoom-in"
                            src={aboutMeImg}
                            alt="img"
                            className={styles.info__img}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
