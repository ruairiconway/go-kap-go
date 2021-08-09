import React from 'react'
import Callout from '../../components/Callout'
import GoFundMePlug from '../../components/GoFundMePlug'
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
                <Image className={"img-title"} src="https://via.placeholder.com/100" />
            </SubSection>
            <SubSection className={"sub-2"}>
                <TextBox className={"text-1"} >
                    <TextBox.Header><TextBox.Pink>Run</TextBox.Pink>raiser</TextBox.Header>
                    <TextBox.SubHeader>For breast cancer awareness</TextBox.SubHeader>
                </TextBox>
                <SocialBar className={"social"} stacked />
                <TextBox className={"text-2"} >
                    <TextBox.Para>Vulputate sapien, <TextBox.Pink>erat lacus</TextBox.Pink> consequat magna massa mi. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet <TextBox.Pink>blandit tellus</TextBox.Pink> adipiscing accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.Para>
                </TextBox>
                <Callout className={"callout-1"} dark >
                    <Callout.Figure center >
                        <Callout.Header><Callout.Pink>30</Callout.Pink></Callout.Header>
                        <Callout.Caption>days</Callout.Caption>
                    </Callout.Figure>
                    <Callout.Figure center >
                        <Callout.Header>465</Callout.Header>
                        <Callout.Caption>miles</Callout.Caption>
                    </Callout.Figure>
                </Callout>
                <TextBox className={"text-3"}>
                    <TextBox.SubHeader align="right" stacked>Share your</TextBox.SubHeader>
                    <TextBox.SubHeader align="right" stacked><TextBox.Pink>support</TextBox.Pink></TextBox.SubHeader>
                    <TextBox.SubHeader align="right" stacked>{'>>>'}</TextBox.SubHeader>
                </TextBox>
                <GoFundMePlug/>
            </SubSection>
        </Section>
    )
}