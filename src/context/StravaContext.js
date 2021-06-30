import React, { useState, createContext, useEffect } from 'react'

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

    return (
        <StravaContext.Provider value={stravaData}>
            {children}
        </StravaContext.Provider>
    )
}

export { StravaContextProvider, StravaContext }