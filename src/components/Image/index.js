import React from 'react'
import {
    Img
} from './styles'

export default function Image({ src, ...prevProps }) {
    return(
        <Img src={src} {...prevProps}/>
    )
}