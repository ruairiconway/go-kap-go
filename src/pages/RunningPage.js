import React from 'react'
import Header from '../components/Header'
import Gauge from '../components/Gauge'

export default function RunningPage() {
    return (
        <>
            <Header />
            <Gauge />
            <main>
                <p>Running page</p>
            </main>
        </>
    )
}