import React from 'react'
import {
    Para
} from './styles'

export default function Callout({ topLine, bottomLine, ...prevProps }) {
    return (
        <div>
            <Para>I'm the {topLine}</Para>
            <p>I'm the {bottomLine}</p>
        </div>
    )
} 