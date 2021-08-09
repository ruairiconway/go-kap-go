import React, { useEffect, useState } from 'react'
import { Wrapper, FundBar, NumDiv, Num, Barlines, Line } from './styles'

export default function Gauge() {

    const [target, setTarget] = useState('10,000')
    const [raised, setRaised] = useState(0)

    useEffect( () => {
        fetch('https://calm-wildwood-53519.herokuapp.com/api/v1/gofundme')
            .then( res => res.json() )
            .then( resJson => {
                // target
                const targetArr = resJson.data[0].fundsGoal.split('')
                const targetDollarInd = targetArr.indexOf('$')
                const targetStr = targetArr.slice(targetDollarInd + 1, -5).join('')
                const targetNum = Number.parseInt(targetStr.replace(',',''))
                setTarget(targetStr)
                // raised
                const fundsArr = resJson.data[0].fundsRaised.split('')
                const fundsNum = Number.parseInt(fundsArr.slice(1, fundsArr.indexOf(' ')).filter(i => i !== ',').join(''))
                setRaised((fundsNum / targetNum * 100))
            })
            .catch( err => console.error(err) )
    }, [])

    return (
        <Wrapper>
            <NumDiv>
                <Num>${ target }</Num>
            </NumDiv>
            <FundBar raised={raised} />
            <Barlines>
                {Array(9).fill(<Line />)}
            </Barlines>
        </Wrapper>
    )
}