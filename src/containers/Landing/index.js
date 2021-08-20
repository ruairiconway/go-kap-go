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
                    <Callout.Title >Go Kap<br/><Callout.Pink>Go</Callout.Pink></Callout.Title>
                </Callout>
                <Image className={"img-title"} src={`${process.env.PUBLIC_URL}/assets/landing.jpg`} left />
            </SubSection>
            <SubSection className={"sub-2"}>
                <TextBox className={"text-1"} >
                    <TextBox.Header><TextBox.Pink>Run</TextBox.Pink>raiser</TextBox.Header>
                    <TextBox.SubHeader>For breast cancer research</TextBox.SubHeader>
                </TextBox>
                <SocialBar className={"social"} stacked />
                <TextBox className={"text-2"} >
                    <TextBox.Para>Hi my name is <TextBox.Pink>Michael</TextBox.Pink>. This September 2021, I will be attempting to run the <TextBox.Pink>days of the month</TextBox.Pink> - running 1 mile on the 1st, 2 on the 2nd, 3 on the 3rd, all the way up to 30 on the 30th, totalling 465 miles. </TextBox.Para>
                    <TextBox.Para>Follow my progress here and share your support as I set out on this physical challenge in hopes of raising <TextBox.Pink>awareness/funds</TextBox.Pink> for breast cancer research. </TextBox.Para>
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