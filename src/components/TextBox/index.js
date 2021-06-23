import React from 'react'
import {
    Wrapper,
    Header,
    SubHeader,
    ParaHeader,
    Para,
    Link,
    Pink
} from './styles'

export default function TextBox({ children, ...prevProps }) {
    return <Wrapper {...prevProps}>{children}</Wrapper>
}

TextBox.Header = function TextBoxHeader({ children, ...prevProps }) {
    return <Header {...prevProps}>{children}</Header>
}

TextBox.SubHeader = function TextBoxSubHeader({ children, ...prevProps }) {
    return <SubHeader {...prevProps}>{children}</SubHeader>
}

TextBox.ParaHeader = function TextBoxParaHeader({ children, ...prevProps}) {
    return <ParaHeader {...prevProps}>{children}</ParaHeader>
}

TextBox.Para = function TextBoxPara({ children, ...prevProps }) {
    return <Para {...prevProps}>{children}</Para>
}

TextBox.Link = function TextBoxLink({ children, ...prevProps }) {
    return <Link {...prevProps}>{children}</Link>
}

TextBox.Pink = function TextBoxPink({ children, ...prevProps }) {
    return <Pink {...prevProps}>{children}</Pink>
}