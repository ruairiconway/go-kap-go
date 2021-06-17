import React from 'react'
import { Link } from 'react-router-dom'
import { HOME, RUNNING, REASON } from '../../constants/routes'
import { Wrapper, Logo, Nav, NavItem } from './styles.js'
import { ReactComponent as Ribbon } from '../../assets/svg/ribbon-small.svg'

export default function Header() {
    return(
        <Wrapper>
            <Logo>
                <Link to={HOME}>
                    <p><span>Go</span> Kap Go</p>
                    <Ribbon />
                </Link>
            </Logo>
            <Nav>
                <ul>
                    <NavItem>
                        <Link to={RUNNING}>The Running</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={REASON}>The Reason</Link>
                    </NavItem>
                    <NavItem pinkBtn >
                        <a href="https://www.gofundme.com" target="_blank" rel="noreferrer">Donate</a>
                    </NavItem>
                </ul>
            </Nav>
        </Wrapper>
    )
}