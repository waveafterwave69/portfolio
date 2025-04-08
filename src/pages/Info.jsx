import Header from '../components/Header/Header'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import InfoContact from '../components/InfoContact/InfoContact'

export default function Info() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        })

        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <InfoContact />
        </>
    )
}
