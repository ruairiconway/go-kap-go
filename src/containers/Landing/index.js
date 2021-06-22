import React from 'react'
import Callout from '../../components/Callout'
import Image from '../../components/Image'
import SocialBar from '../../components/SocialBar'
import TextBox from '../../components/TextBox'
import {
    Section,
    SubSection
} from './styles'

export default function LandingContainer({ children, ...prevProps }) {
    return (
        <Section>
            <SubSection className={"sub-1"}>
                <Callout className={"callout-title"} dark >
                    <Callout.Title >Go Kap <Callout.Pink>Go</Callout.Pink></Callout.Title>
                </Callout>
                <Image className={"img-title"} src="https://via.placeholder.com/515" />
            </SubSection>
            <SubSection className={"sub-2"}>
                <TextBox className={"text-1"} >
                    <TextBox.Header><TextBox.Pink>Run</TextBox.Pink>raiser</TextBox.Header>
                    <TextBox.SubHeader>For breast cancer awareness</TextBox.SubHeader>
                </TextBox>
                <SocialBar className={"social"} stacked />
                <TextBox className={"text-2"} >
                    <TextBox.Para>Vulputate sapien, <TextBox.Pink>erat lacus</TextBox.Pink> consequat magna massa mi. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet <TextBox.Pink>blandit tellus</TextBox.Pink> adipiscing accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.Para>
                    <TextBox.Para>Ut nibh consectetur eget suspendisse sed leo urna duis ut. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet <TextBox.Pink>blandit tellus</TextBox.Pink> adipiscing accumsan.</TextBox.Para>
                </TextBox>
                <Callout className={"callout-1"} dark >
                    <Callout.Figure>
                        <Callout.Header><Callout.Pink>31</Callout.Pink></Callout.Header>
                        <Callout.Caption>days</Callout.Caption>
                    </Callout.Figure>
                    <Callout.Figure>
                        <Callout.Header>496</Callout.Header>
                        <Callout.Caption>miles</Callout.Caption>
                    </Callout.Figure>
                </Callout>
                <TextBox className={"text-3"}>
                    <TextBox.SubHeader align="right">Share your</TextBox.SubHeader>
                    <TextBox.SubHeader align="right"><TextBox.Pink>support</TextBox.Pink></TextBox.SubHeader>
                    <TextBox.SubHeader align="right">{'>>>'}</TextBox.SubHeader>
                </TextBox>
                <Image className={"gofundme"} src="https://via.placeholder.com/350x350" />
            </SubSection>
        </Section>
    )
}