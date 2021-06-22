import React from 'react'
import { Wrapper, FundBar, NumDiv, Num, Barlines, Line } from './styles'

export default function Gauge() {
    return (
        <Wrapper>
            <NumDiv>
                <Num>$20,000</Num>
            </NumDiv>
            <FundBar />
            <Barlines>
                {Array(9).fill(<Line />)}
            </Barlines>
        </Wrapper>
    )
}