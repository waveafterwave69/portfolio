import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import '../SwiperWorks/swiperWorkStyle.css'

export default function SlideElementWork(props) {
    return (
        <>
            <SwiperSlide className="swiper-el-work">
                <img
                    src={props.img}
                    alt={props.id}
                    className="swiper-el-work"
                />
                <h5 className="swiper-title">{props.id}</h5>
            </SwiperSlide>
        </>
    )
}
