import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5rem;
    background: ${({ dark }) => dark ? "var(--dark)" : "var(--light)"};
    width: min-content;
    padding: 2.5rem;
    box-shadow: var(--base-shadow);

    ${({ dark }) => dark ? `
        color: var(--light);
    ` : `
        color: var(--dark);
    `}
`

export const Title = styled.h1`
    font-family: var(--header);
    font-weight: 400;
    font-size: 8.4rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 125%;
    padding: 0 0.5em 0 0;
`

export const Figure = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.p`
    font-family: var(--header);
    font-weight: 400;
    font-size: 8.4em;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 125%;
`

export const Caption = styled.p`
    font-family: var(--body);
    font-weight: 600;
    font-size: 1.8rem;
    text-transform: uppercase;
`

export const Pink = styled.span`
    color: var(--pink);
`