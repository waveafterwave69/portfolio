import styles from './styles.module.scss'

export default function () {
    return (
        <>
            <header className={styles.header} data-aos="fade-down">
                <div className="header__container">
                    <div className={styles.row}>
                        <a href="#!" className={styles.logo}>
                            / DEVELOPER /
                        </a>
                        <ul className={styles.pages__list}>
                            <li>
                                <a href="#!" className={styles.pages__item}>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#!" className={styles.pages__item}>
                                    ####
                                </a>
                            </li>
                        </ul>
                        <ul className={styles.social__list}>
                            <li>
                                <a
                                    href="https://t.me/asdqwwel"
                                    target="_blank"
                                    className={styles.social__item}
                                >
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/waveafterwave69"
                                    target="_blank"
                                    className={styles.social__item}
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
