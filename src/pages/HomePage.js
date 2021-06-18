import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'

export default function HomePage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <p>Home page</p>
            </main>
        </>
    )
}