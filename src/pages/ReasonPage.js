import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import Footer from '../components/Footer'

export default function ReasonPage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <p>Reason page</p>
            </main>
            <Footer />
        </>
    )
}