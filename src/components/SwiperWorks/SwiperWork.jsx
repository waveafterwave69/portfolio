import { swiperWorkEls } from '../../helpers/data'

import { Swiper, SwiperSlide } from 'swiper/react'

import work1 from '../../img/works/works-1.png'
import work2 from '../../img/works/works-2.png'
import work3 from '../../img/works/works-3.png'
import work4 from '../../img/works/work-4.png'
import work5 from '../../img/works/works-5.png'

const arr = [work1, work2, work3, work4, work5]
import 'swiper/css'
import 'swiper/css/navigation'

import './swiperWorkStyle.css'

import { Navigation } from 'swiper/modules'
import SlideElementWork from '../SlideElementWork/SlideElementWork'

export default function SwiperWork(props) {
    return (
        <>
            <Swiper
                data-aos="fade-up"
                navigation={true}
                modules={[Navigation]}
                className="swiper-work"
                slidesPerView={1}
            >
                {swiperWorkEls.map((swiperEl, index) => (
                    <SwiperSlide className="swiper-work-img" key={swiperEl.id}>
                        <p className="swiper-text">{swiperEl.text}</p>
                        <SlideElementWork img={arr[index]} />
                        <a
                            href={swiperEl.id}
                            className="swiper-link"
                            target="_blank"
                        >
                            Перейти на сайт
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
