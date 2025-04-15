import styles from './styles.module.scss'

import cardProfileImg from '../../img/promo/profile-photo.svg'
import cardEmailImg from '../../img/promo/promo-mail.svg'
import cardLocationImg from '../../img/promo/promo-location.svg'
import cardWorkImg from '../../img/promo/promo-work.svg'
import cardDownloadImg from '../../img/promo/promo-download.svg'

import resume from '../../img/portfolio.pdf'

export default function DeveloperCard() {
    return (
        <>
            <div className={styles.card} data-aos="fade-right">
                <div className={styles.column}>
                    <img
                        className={styles.card__img}
                        src={cardProfileImg}
                        alt="фотография профиля"
                    />
                    <h4 className={styles.title}>Михаил</h4>
                    <h5 className={styles.subtitle}>Frontend разработчик</h5>
                    <ul className={styles.list}>
                        <li>
                            <a
                                href="mailto:waveafterwave3w2@gmail.com"
                                className={styles.link}
                            >
                                <img
                                    className={styles.link__img}
                                    src={cardEmailImg}
                                    alt="send message"
                                />
                                waveafterwave3w2@gmail.com
                            </a>
                        </li>
                        <li className={styles.link}>
                            <img
                                className={styles.link__img}
                                src={cardLocationImg}
                                alt="местоположение"
                            />
                            Пенза
                        </li>
                        <li className={styles.link}>
                            <img
                                className={styles.link__img}
                                src={cardWorkImg}
                                alt="график работы"
                            />
                            Полный день
                        </li>
                    </ul>
                </div>
                <ul className={styles.tags__list}>
                    <li className={styles.tags__item}>HTML</li>
                    <li className={styles.tags__item}>CSS</li>
                    <li className={styles.tags__item}>JS</li>
                    <li className={styles.tags__item}>REACT</li>
                </ul>
                <a
                    href={resume}
                    download="Шонов Михаил, Frontend Разработчик.pdf"
                >
                    <button className={styles.download}>
                        <p className={styles.download__text}>Резюме</p>
                        <img
                            className={styles.download__img}
                            src={cardDownloadImg}
                            alt="скачать"
                        />
                    </button>
                </a>
            </div>
        </>
    )
}
