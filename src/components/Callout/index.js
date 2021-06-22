import React from 'react'
import {
    Wrapper,
    Title,
    Pink
} from './styles'

export default function Callout({ children, ...prevProps }) {
    return <Wrapper {...prevProps}>{children}</Wrapper>
}

Callout.Title = function CalloutTitle({ children, ...prevProps }) {
    return <Title {...prevProps}>{children}</Title>
}

Callout.Pink = function CalloutPink({ children, ...prevProps }) {
    return <Pink {...prevProps}>{children}</Pink>
}