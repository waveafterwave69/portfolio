import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import '../SwiperComponent/swiperStyle.css'

export default function SlideElement(props) {
    return (
        <>
            <SwiperSlide className="swiper-el">
                <img src={props.img} alt={props.id} />
                <h5 className="swiper-title">{props.id}</h5>
            </SwiperSlide>
        </>
    )
}
