import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'
import Callout from '../components/Callout'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <p>Home page</p>
                <Callout dark >
                    <Callout.Title dark >Go Kap <Callout.Pink>Go</Callout.Pink></Callout.Title>
                </Callout>
            </main>
        </>
    )
}