import styles from './styles.module.scss'

import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => (isActive ? 'pages__active' : 'pages__item')

export default function () {
    return (
        <>
            <header className={styles.header} data-aos="fade-down">
                <div className="header__container">
                    <div className={styles.row}>
                        <NavLink to="/" className={styles.logo}>
                            / DEVELOPER /
                        </NavLink>
                        <ul className={styles.pages__list}>
                            <li>
                                <NavLink to="/" className={setActive}>
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/info" className={setActive}>
                                    Информация
                                </NavLink>
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
