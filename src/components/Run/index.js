import React from 'react'
import {
    convertDistance,
    convertTime,
    convertPace,
    convertElevation
} from '../../tools/convert'
import {
    Wrapper,
    Title,
    Para,
    Data,
    Stat,
    Metric
} from './styles'

export default function Run({ stats, latest, children, ...prevProps }) {
    if (stats) {
        const {
            name,
            distance,
            moving_time,
            average_speed,
            total_elevation_gain,
            start_date_local
        } = stats

        const statsInfo = [ 
            {stat: convertDistance(distance), metric: "distance", unit: "mi"},
            {stat: convertTime(moving_time), metric: "time", unit: null},
            {stat: convertPace(average_speed), metric: "pace", unit: "min / mi"},
            {stat: convertElevation(total_elevation_gain), metric: "elevation", unit: "ft"}
        ]

        const statsList = statsInfo.map(info => {
            return (
                <Stat key={info.stat}>
                    <Para metric >{info.metric}</Para>
                    <Metric>
                        <Para stat >{info.stat}</Para>
                        <Para unit >{info.unit}</Para>
                    </Metric>
                </Stat>
            )
        })

        console.log(statsInfo)
        return (
            <Wrapper>
                {latest && <Title>Latest run</Title>}
                <Title align="right">{name}</Title>
                <Para align="right">Run completed {start_date_local}</Para>
                <Data>
                    {statsList}
                </Data>
            </Wrapper>
        )
    } else {
        return (
            <p>finding latest run</p>
        )
    }
}