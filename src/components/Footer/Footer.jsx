import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import img from '../../img/footer/shape.svg'
import { useState } from 'react'

export default function Footer() {
    const [status, setStatus] = useState('Отправить')

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm({
        mode: 'onChange',
    })

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus('Отправка...')

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
            reset()
        }

        setStatus('Отправить')
    }
    return (
        <>
            <footer className={styles.footer}>
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
                                    {...register('name', {
                                        required:
                                            "Поле 'Имя' обязательно для заполнения",
                                    })}
                                    className={
                                        errors.name
                                            ? `${styles.form__input__full} ${styles.input__error} ${styles.form__width}`
                                            : `${styles.form__input__full} ${styles.form__width}`
                                    }
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
                                    {...register('email', {
                                        required:
                                            "Поле 'Email' обязательно для заполнения",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Неверный формат email',
                                        },
                                    })}
                                    className={
                                        errors.email
                                            ? `${styles.form__input__full} ${styles.input__error} ${styles.form__width}`
                                            : `${styles.form__input__full} ${styles.form__width}`
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.form__item}>
                            <h5 className={styles.form__title}>
                                Ваше сообщение *
                            </h5>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Напишите сообщение"
                                id="text"
                                {...register('message', {
                                    required:
                                        "Поле 'Message' обязательно для заполнения",
                                })}
                                className={
                                    errors.message
                                        ? `${styles.form__input__full} ${styles.input__error}`
                                        : styles.form__input__full
                                }
                            />
                        </div>
                        <button
                            disabled={!isValid || isSubmitting}
                            type="submit"
                            className={styles.form__button}
                        >
                            <p> {status}</p>
                            <img src={img} alt="shape" />
                        </button>
                    </form>
                </div>
            </footer>
        </>
    )
}
