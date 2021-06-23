import React from 'react'
import { Link } from 'react-router-dom'
import { REASON } from '../../constants/routes'
import TextBox from '../../components/TextBox'
import Image from '../../components/Image'
import Button from '../../components/Button'
import {
    Section
} from './styles'

export default function ReasonLeadIn() {
    return (
        <Section>
            <TextBox className={"header"}>
                <TextBox.Header>The <TextBox.Pink>reason</TextBox.Pink></TextBox.Header>
            </TextBox>
            <TextBox className={"para-header"}>
                <TextBox.ParaHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.ParaHeader>
            </TextBox>
            <TextBox className={"para"}>
                <TextBox.Para>Vulputate sapien, erat lacus consequat magna massa mi. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet blandit tellus adipiscing accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBox.Para>
                <TextBox.Para>Ut nibh consectetur eget suspendisse sed leo urna duis ut. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet blandit tellus adipiscing accumsan. Quam consectetur sed posuere lectus. Diam, vitae amet donec blandit vel nunc nisl. Imperdiet lacus iaculis sit consectetur. Massa nunc nullam auctor amet blandit tellus adipiscing accumsan.</TextBox.Para>
            </TextBox>
            <Image src="https://via.placeholder.com/515" className={"image1"} />
            <Image src="https://via.placeholder.com/100" className={"image2"} />
            <Link to={REASON} className={"link"}>
                <Button>Learn more</Button>
            </Link>
        </Section>
    )
}