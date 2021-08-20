import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import LandingContainer from '../containers/Landing'
import InstaFeed from '../components/InstaFeed'
import RunningLeadIn from '../containers/RunningLeadIn'
import ReasonLeadIn from '../containers/ReasonLeadIn'
import Footer from '../components/Footer'
import TextBox from '../components/TextBox'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <LandingContainer />
                <InstaFeed />
                <TextBox style={{maxWidth: '100%'}}>
                    <TextBox.SubHeader style={{textAlign: 'center'}}><TextBox.Pink>More</TextBox.Pink> to come!</TextBox.SubHeader>
                </TextBox>
                {/* <RunningLeadIn /> */}
                {/* <ReasonLeadIn /> */}
            </main>
            <Footer />
        </>
    )
}