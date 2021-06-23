import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import LandingContainer from '../containers/Landing'
import InstaBanner from '../components/InstaBanner'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <LandingContainer />
                <InstaBanner />
            </main>
            <Footer />
        </>
    )
}