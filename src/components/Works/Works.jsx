import SwiperWork from '../SwiperWorks/SwiperWork'
import styles from './styles.module.scss'

export default function Works() {
    return (
        <>
            <section className={styles.works}>
                <h2 className={styles.title} data-aos="fade-down">
                    Проекты
                </h2>
                <SwiperWork />
            </section>
        </>
    )
}
