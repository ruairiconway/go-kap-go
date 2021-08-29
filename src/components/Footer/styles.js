import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 9rem calc(35px + 4rem) 9rem 3rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media (max-width: 1080px) {
        margin: 9rem 1rem 9rem 1rem;
    }
`

export const SignOff = styled.p`
    margin-top: 3rem;
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    line-height: 1.3;
    color: var(--shadow);
    transition: 0.5s;
`

export const Link = styled.a`
    color: var(--shadow);
    transition: 0.5s;
    text-decoration: none;

    &:hover {
        color: var(--dark);
    }
`