import React, { useContext } from 'react'
import { StravaContext } from '../context/StravaContext'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import TextBox from '../components/TextBox'
import SocialBar from '../components/SocialBar'
import Callout from '../components/Callout'
import Footer from '../components/Footer'

export default function RunningPage() {

    const strava = useContext(StravaContext)

    return (
        <>
            <Header />
            <Gauge />
            <main>
                <TextBox>
                    <TextBox.Header>The <TextBox.Pink>Run</TextBox.Pink>ning</TextBox.Header>
                </TextBox>
                <SocialBar />
                <Callout className={"callout2"} >
                    <Callout.Figure>
                        <Callout.Header><Callout.Pink>{strava.totalMi}</Callout.Pink> / 465</Callout.Header>
                        <Callout.Caption>Total miles</Callout.Caption>
                    </Callout.Figure>
                </Callout>
            </main>
            <Footer />
        </>
    )
}