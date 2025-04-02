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
                            <div data-aos="zoom-in">
                                <div className={styles.info}>
                                    <h5 className={styles.info__title}>
                                        Здраствуйте!
                                    </h5>
                                    <p className={styles.info__text}>
                                        Меня зовут Михаил, и я специализируюсь
                                        на веб-разработке с использованием HTML,
                                        CSS, JS и REACT и других инструментах. Я
                                        высоко мотивированный и отвественный
                                        человек. Я способен создавать
                                        привлекательный и функциональный
                                        интерфейс для любых типов веб-сайтов и
                                        приложений, от блогов и
                                        интернет-магазинов до порталов и личных
                                        кабинетов пользователей. Я обладаю
                                        знаниями в области адаптивной
                                        веб-разработки и готов создать
                                        веб-приложения, которые будут одинаково
                                        хорошо работать на различных
                                        устройствах.
                                    </p>
                                </div>
                            </div>
                            <img
                                src={aboutMeImg}
                                alt="img"
                                className={styles.info__img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
