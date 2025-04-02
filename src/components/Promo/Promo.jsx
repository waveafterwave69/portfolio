import DeveloperCard from '../DeveloperCard/DeveloperCard'
import styles from './styles.module.scss'

import sendMessage from '../../img/promo/promo-lets-talk.svg'
import { useState } from 'react'

export default function Promo() {
    const [val, setVal] = useState('F')

    window.onload = function () {
        let str = 'Frontend Developer.'
        let arr = str.split('')
        let res = ''
        let count = 0

        setInterval(() => {
            if (count < arr.length) {
                let curr = arr[count]
                res += curr
                setVal(res)
                count++
            }
        }, 125)
    }

    return (
        <>
            <div className={styles.promo}>
                <div className="container">
                    <h1
                        className={styles.title}
                        data-aos="zoom-in"
                        data-aos-duration="500"
                    >
                        {val}
                    </h1>
                    <div className={styles.row}>
                        <div className={styles.column} data-aos="fade-up">
                            <h2 className={styles.subtitle}>
                                Здраствуйте, меня зовут <span>Михаил</span>{' '}
                                <br></br> Я - Разработчик
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
