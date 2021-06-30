import React, { useState, createContext, useEffect } from 'react'
import { findTodaysMi } from '../tools/findTodaysMi'
import { findTodaysTarget } from '../tools/findTodaysTarget'
import { findTotalMi } from '../tools/findTotalMi'

const StravaContext = createContext()

function StravaContextProvider({ children }) {

    const [ stravaData, setStravaData ] = useState(null)
    
    useEffect(() => {
        fetch('https://calm-wildwood-53519.herokuapp.com/api/v1/strava')
            .then(data => data.json())
            .then(jsonData => {
                setStravaData(jsonData)
            })
            .catch(err => console.log(err))
    }, [])

    let latestRun
    let todaysMi
    let totalMi
    let todaysTarget

    if (stravaData !== null) {
        latestRun = stravaData[0] // Latest Run
        todaysMi = findTodaysMi(stravaData) // todays miles
        totalMi = findTotalMi(stravaData) // total miles
        todaysTarget = findTodaysTarget()
    }

    return (
        <StravaContext.Provider value={{ stravaData, latestRun, todaysMi, totalMi, todaysTarget }}>
            {children}
        </StravaContext.Provider>
    )
}

export { StravaContextProvider, StravaContext }