import React from 'react'
import SocialBar from '../SocialBar'
import {
    Wrapper,
    SignOff,
    Link
} from './styles'

export default function Footer() {
    return (
        <Wrapper>
            <SocialBar />
            <SignOff>Built by <Link href="https://www.ruairiconway.com" target="_blank">Ruairi Conway</Link> &copy; 2021</SignOff>
        </Wrapper>
    )
}