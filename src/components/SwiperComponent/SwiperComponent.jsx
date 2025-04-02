import { swiperEls, colors } from '../../helpers/data'

import { Swiper, SwiperSlide } from 'swiper/react'

import img from '../../img/skills/html.svg'

import 'swiper/css'
import 'swiper/css/navigation'

import './swiperStyle.css'

import { Navigation } from 'swiper/modules'
import SlideElement from '../SlideElement/SlideElement'

export default function SwiperComponent(props) {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
            >
                {swiperEls.map((swiperEl, index) => (
                    <SwiperSlide
                        style={{ color: colors[index] }}
                        key={swiperEl.id}
                    >
                        <SlideElement id={swiperEls.id} img={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
