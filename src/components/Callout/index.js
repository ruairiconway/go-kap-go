import React from 'react'
import {
    Wrapper,
    Title,
    Figure,
    Header,
    Caption,
    Pink
} from './styles'

export default function Callout({ children, ...prevProps }) {
    return <Wrapper {...prevProps}>{children}</Wrapper>
}

Callout.Title = function CalloutTitle({ children, ...prevProps }) {
    return <Title {...prevProps}>{children}</Title>
}

Callout.Figure = function CalloutFigure({ children, ...prevProps}) {
    return <Figure {...prevProps}>{children}</Figure>
}

Callout.Header = function CalloutHeader({ children, ...prevProps}) {
    return <Header {...prevProps}>{children}</Header>
}

Callout.Caption = function CalloutCaption({ children, ...prevProps}) {
    return <Caption {...prevProps}>{children}</Caption>
}

Callout.Pink = function CalloutPink({ children, ...prevProps }) {
    return <Pink {...prevProps}>{children}</Pink>
}