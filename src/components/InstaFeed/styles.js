import styled from 'styled-components'

export const Wrapper = styled.div`

`

export const Title = styled.h4`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.75px;
    line-height: 1.3;
    margin: 0 0 1rem 0;
`

export const Link = styled.a`
    font-weight: 700;
    text-decoration: none;
    color: var(--pink);
`

export const Feed = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }
`