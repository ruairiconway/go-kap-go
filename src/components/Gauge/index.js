import React from 'react'
import { Wrapper, Funds, NumDiv, Num, Barlines, Line } from './styles'

export default function Gauge() {
    return (
        <Wrapper>
            <NumDiv>
                <Num>$20,000</Num>
            </NumDiv>
            <Funds />
            <Barlines>
                {Array(9).fill(<Line />)}
            </Barlines>
        </Wrapper>
    )
}