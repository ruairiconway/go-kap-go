import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import LandingContainer from '../containers/Landing'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <LandingContainer />
            </main>
        </>
    )
}