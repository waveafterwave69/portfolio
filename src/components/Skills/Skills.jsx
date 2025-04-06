import SwiperComponent from '../SwiperComponent/SwiperComponent'
import styles from './styles.module.scss'

export default function Skills() {
    return (
        <>
            <section className={styles.skills}>
                <div className="container">
                    <div data-aos="fade-up">
                        <h2 className={styles.title}>Навыки</h2>
                        <h3 className={styles.subtitle}>
                            Я владею многими инструментами разработки и всегда
                            стремлюсь учиться и совершенствоваться.
                        </h3>
                    </div>

                    <div data-aos="fade-up">
                        <p className={styles.text}>
                            Я обладаю опытом работы с различными инструментами
                            веб-разработки, такими как:{' '}
                            <span>
                                HTML, CSS, JavaScript, React, SASS, Redux, Next,
                                Vite, Webpack, Git, GitHub, Figma и React
                                библиотеки.
                            </span>
                        </p>
                        <SwiperComponent />
                    </div>
                </div>
            </section>
        </>
    )
}
