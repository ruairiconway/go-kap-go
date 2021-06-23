import React from 'react'
import { Link } from 'react-router-dom'
import { RUNNING } from '../../constants/routes'
import TextBox from '../../components/TextBox'
import Callout from '../../components/Callout'
import Image from '../../components/Image'
import Button from '../../components/Button'
import {
    Section
} from "./styles"

export default function RunningLeadIn() {
    return (
        <Section>
            <TextBox className={"text-box"}>
                <TextBox.Header>The <TextBox.Pink>run</TextBox.Pink>ning</TextBox.Header>
                <TextBox.ParaHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.ParaHeader>
                <TextBox.Para>Vulputate sapien, <TextBox.Pink>erat lacus</TextBox.Pink> consequat magna massa mi. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet <TextBox.Pink>blandit tellus</TextBox.Pink> adipiscing accumsan.</TextBox.Para>
            </TextBox>
            <Image src="https://via.placeholder.com/100" className={"stats"} />
            <Link to={RUNNING} className={"link"}>
                <Button>See stats</Button>
            </Link>
            <Image src="https://via.placeholder.com/100" className={"map"} />
            <Callout className={"callout1"} dark >
                <Callout.Figure>
                    <Callout.Header><Callout.Pink>10</Callout.Pink> / 10</Callout.Header>
                    <Callout.Caption>Todays miles</Callout.Caption>
                </Callout.Figure>
            </Callout>
            <Callout className={"callout2"} dark >
                <Callout.Figure>
                    <Callout.Header><Callout.Pink>55</Callout.Pink> / 465</Callout.Header>
                    <Callout.Caption>Todays miles</Callout.Caption>
                </Callout.Figure>
            </Callout>
        </Section>
    )
}