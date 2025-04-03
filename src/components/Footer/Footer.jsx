import styles from './styles.module.scss'

import img from '../../img/footer/shape.svg'
import { useState } from 'react'

export default function Footer() {
    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        formData.append('access_key', 'a318ca25-65f3-4e6e-86b3-85097fb85f2e')

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        }).then((res) => res.json())

        if (res.success) {
            document.querySelector('#name').value = ''
            document.querySelector('#email').value = ''
            document.querySelector('#text').value = ''
        }
    }

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
                    <form onSubmit={onSubmit} action="" className={styles.form}>
                        <div className={styles.form__row}>
                            <div className={styles.form__item}>
                                <h5 className={styles.form__title}>
                                    Ваше имя *
                                </h5>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Напишите имя"
                                    id="name"
                                    className={styles.form__input}
                                />
                            </div>
                            <div className={styles.form__item}>
                                <h5 className={styles.form__title}>
                                    Ваша почта *
                                </h5>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Напишите почту"
                                    id="email"
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
                                name="message"
                                placeholder="Напишите сообщение"
                                id="text"
                                className={styles.form__input__full}
                            />
                        </div>
                        <button type="submit" className={styles.form__button}>
                            <p>Отправить</p>
                            <img src={img} alt="shape" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
