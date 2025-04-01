import DeveloperCard from '../DeveloperCard/DeveloperCard'
import styles from './styles.module.scss'

import sendMessage from '../../img/promo/promo-lets-talk.svg'

export default function Promo() {
    return (
        <>
            <div className={styles.promo}>
                <div className="container">
                    <h1 className={styles.title}>Frontend Developer</h1>
                    <div className={styles.row}>
                        <DeveloperCard />
                        <div className={styles.column}>
                            <h2 className={styles.subtitle}>
                                Здраствуйте,<br></br>
                                меня зовут Михаил<br></br>я - разработчик
                                <br></br>
                            </h2>
                            <p className={styles.text}>
                                приветствую вас на своём сайте-визитке. мне 17
                                лет, я активно занимаюсь frontend разработкой и
                                имею опыт уже в 2 года.
                            </p>
                            <button className={styles.button}>
                                <p className={styles.button__text}>
                                    Давайте поговорим
                                </p>
                                <img
                                    className={styles.button__img}
                                    src={sendMessage}
                                    alt="send message"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
