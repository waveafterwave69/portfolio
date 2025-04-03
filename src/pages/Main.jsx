import Header from '../components/Header/Header'
import Promo from '../components/Promo/Promo'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'

export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        })
    }, [])

    return (
        <>
            <Promo />
            <AboutMe />
            <Skills />
            <Works />
        </>
    )
}
