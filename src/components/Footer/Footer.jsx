import styles from './styles.module.scss'

import img from '../../img/footer/shape.svg'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className="container">
                    <h2 className={styles.title} data-aos="flip-up">
                        Связь
                    </h2>
                    <div className={styles.message} data-aos="flip-up">
                        Отправьте мне сообщение
                    </div>
                    <form action="" className={styles.form}>
                        <div className={styles.form__row}>
                            <div className={styles.form__item}>
                                <h5 className={styles.form__title}>
                                    Ваше имя *
                                </h5>
                                <input
                                    type="text"
                                    placeholder="Напишите имя"
                                    className={styles.form__input}
                                />
                            </div>
                            <div className={styles.form__item}>
                                <h5 className={styles.form__title}>
                                    Ваша почта *
                                </h5>
                                <input
                                    type="text"
                                    placeholder="Напишите почту"
                                    className={styles.form__input}
                                />
                            </div>
                        </div>
                        <div className={styles.form__item}>
                            <h5 className={styles.form__title}>
                                Ваше сообщение *
                            </h5>
                            <input
                                type="text"
                                placeholder="Напишите сообщение"
                                className={styles.form__input__full}
                            />
                        </div>
                        <button className={styles.form__button}>
                            <p>Отправить</p>
                            <img src={img} alt="shape" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
