import styled from 'styled-components'

export const Wrapper = styled.div`
    background: ${({ dark }) => dark ? "var(--dark)" : "var(--light)"};
    width: min-content;
    padding: 2.5em;
`

export const Title = styled.h1`
    color: ${({ dark }) => dark ? "var(--light)" : "var(--dark)"};
    font-family: var(--header);
    font-weight: 400;
    font-size: 8.4em;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 115%;
    padding: 0 0.5em 0 0;
`

export const Pink = styled.span`
    color: var(--pink);
`