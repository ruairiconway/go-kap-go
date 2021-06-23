import React from 'react'
import {
    Wrapper
} from './styles'

export default function Button({ children, ...prevProps }) {
    return (
        <Wrapper {...prevProps}>{children}</Wrapper>
    )
}