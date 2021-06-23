import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import LandingContainer from '../containers/Landing'
import InstaBanner from '../components/InstaBanner'
import RunningLeadIn from '../containers/RunningLeadIn'
import ReasonLeadIn from '../containers/ReasonLeadIn'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <LandingContainer />
                <InstaBanner />
                <RunningLeadIn />
                <ReasonLeadIn />
            </main>
            <Footer />
        </>
    )
}