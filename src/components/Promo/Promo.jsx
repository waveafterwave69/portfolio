import styles from './styles.module.scss'

import sendMessage from '../../img/promo/promo-lets-talk.svg'

export default function Promo() {
    return (
        <>
            <section className={styles.promo}>
                <div className="container">
                    <div className={styles.row}>
                        <div className={styles.column} data-aos="fade-up">
                            <h2 className={styles.subtitle}>
                                Здраствуйте, меня зовут <span>Михаил</span>{' '}
                                <br></br> Я - Разработчик
                            </h2>
                            <p className={styles.text}>
                                приветствую вас на своём сайте-визитке. мне 17
                                лет, я активно занимаюсь frontend разработкой и
                                имею опыт уже в 1 год.
                            </p>
                            <a
                                href="mailto:waveafterwave3w2@gmail.com"
                                className={styles.button}
                            >
                                <p className={styles.button__text}>
                                    Давайте поговорим
                                </p>
                                <img
                                    className={styles.button__img}
                                    src={sendMessage}
                                    alt="send message"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
