import Header from '../components/Header/Header'
import Promo from '../components/Promo/Promo'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        })
    }, [])

    return (
        <>
            <Header />
            <Promo />
        </>
    )
}
