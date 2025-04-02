import { swiperEls, colors } from '../../helpers/data'

import { Swiper, SwiperSlide } from 'swiper/react'

import html from '../../img/skills/html.svg'
import css from '../../img/skills/css.svg'
import js from '../../img/skills/js.svg'
import react from '../../img/skills/react.svg'
import sass from '../../img/skills/sass.svg'
import redux from '../../img/skills/redux.svg'
import next from '../../img/skills/next.svg'
import vite from '../../img/skills/vite.svg'
import webpack from '../../img/skills/webpack.svg'
import git from '../../img/skills/git.svg'
import github from '../../img/skills/github.svg'
import figma from '../../img/skills/figma.svg'

const arr = [
    html,
    css,
    js,
    react,
    sass,
    redux,
    next,
    vite,
    webpack,
    git,
    github,
    figma,
]

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
                        <SlideElement id={swiperEl.id} img={arr[index]} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
