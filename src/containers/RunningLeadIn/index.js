import React, { useContext } from 'react'
import { StravaContext } from '../../context/StravaContext' 
import { Link } from 'react-router-dom'
import { RUNNING } from '../../constants/routes'
import TextBox from '../../components/TextBox'
import Callout from '../../components/Callout'
import Button from '../../components/Button'
import Map from '../../components/Map'
import Run from '../../components/Run'
import {
    Section
} from "./styles"

export default function RunningLeadIn() {

    const strava = useContext(StravaContext)

    if ( strava === null ) {
        return <p>LOADING</p>
    } else {
        return (
            <Section>
                <TextBox className={"text-box"}>
                    <TextBox.Header>The <TextBox.Pink>run</TextBox.Pink>ning</TextBox.Header>
                    <TextBox.ParaHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.ParaHeader>
                    <TextBox.Para>Vulputate sapien, <TextBox.Pink>erat lacus</TextBox.Pink> consequat magna massa mi. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet <TextBox.Pink>blandit tellus</TextBox.Pink> adipiscing accumsan.</TextBox.Para>
                </TextBox>
                <Run className={"stats"} stats={strava.latestRun} latest />
                {/* <Link to={RUNNING} className={"link"}>
                    <Button>See stats</Button>
                </Link> */}
                <Map latest />
                <Callout className={"callout1"} dark >
                    <Callout.Figure>
                        <Callout.Header><Callout.Pink>{strava.todaysMi}</Callout.Pink> / {strava.todaysTarget}</Callout.Header>
                        <Callout.Caption>Todays miles</Callout.Caption>
                    </Callout.Figure>
                </Callout>
                <Callout className={"callout2"} dark >
                    <Callout.Figure>
                        <Callout.Header><Callout.Pink>{strava.totalMi}</Callout.Pink> / 465</Callout.Header>
                        <Callout.Caption>Total miles</Callout.Caption>
                    </Callout.Figure>
                </Callout>
            </Section>
        )
    }
}