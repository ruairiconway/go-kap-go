import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: max-content;
    margin: 0 3rem;

    @media (max-width: 1080px) {
        margin: 0 1rem;
    }

    > :first-child {
        margin-top: 0;
    }

    p:first-of-type {
        margin: 0 0 2rem 0;
    }

    p:last-of-type {
        margin: 0;
    }

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
    margin: ${({ stacked }) => stacked ? "0" : "0 0 3rem 0"}
`

export const ParaHeader = styled.h4`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.8rem;
    letter-spacing: 0.75px;
    line-height: 1.3;
    text-transform: uppercase;
    margin: 3rem 0;
`

export const Para = styled.p`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    line-height: 1.3;
    margin: 0 0 2rem 0;

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