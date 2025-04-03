import SwiperWork from '../SwiperWorks/SwiperWork'
import styles from './styles.module.scss'

export default function Works() {
    return (
        <>
            <div className={styles.works}>
                <h2 className={styles.title} data-aos="fade-down">
                    Проекты
                </h2>
                <SwiperWork />
            </div>
        </>
    )
}
