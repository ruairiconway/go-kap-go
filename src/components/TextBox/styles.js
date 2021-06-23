import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: max-content;
    margin: 0 3rem;
`

export const Header = styled.h2`
    font-family: var(--header);
    font-weight: 400;
    font-size: 8.4rem;
    letter-spacing: 5px;
    line-height: 100%;
    text-transform: uppercase;
`

export const SubHeader = styled.h3`
    font-family: var(--header);
    font-weight: 400;
    font-size: 3.6rem;
    letter-spacing: 2px;
    line-height: 150%;
    text-transform: uppercase;
    text-align: ${({ align }) => align === "left" ? "left":"right"};
`

export const Para = styled.p`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    line-height: 1.3;

    &:first-child {
        margin: 0 0 1rem 0;
    }

    &:last-child {
        margin: 0;
    }

    span, a {
        font-weight: 700;
        letter-spacing: 0.3px;
    }
`

export const Link = styled.a`

`

export const Pink = styled.span`
    color: var(--pink);
`