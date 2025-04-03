import DeveloperCard from '../DeveloperCard/DeveloperCard'
import styles from './styles.module.scss'

import tg from '../../img/global/tg.png'
import github from '../../img/global/git.png'

export default function InfoContact() {
    return (
        <>
            <div className={styles.contact}>
                <div className="container">
                    <div className={styles.row}>
                        <DeveloperCard />
                        <div className={styles.column} data-aos="fade-left">
                            <div className={styles.socials}>Соц-сети</div>
                            <ul className={styles.contact__list}>
                                <li>
                                    <a
                                        href="https://t.me/asdqwwel"
                                        target="_blank"
                                        className={styles.contact__link}
                                    >
                                        <img src={tg} alt="tg" />
                                        <p>Telegram</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/waveafterwave69"
                                        target="_blank"
                                        className={styles.contact__link}
                                    >
                                        <img src={github} alt="gut" />
                                        <p>Github</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
