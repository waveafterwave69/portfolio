import Header from '../components/Header/Header'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Info() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
        })
    }, [])

    return <></>
}
