import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template: 1fr auto auto / 1fr 1fr;
    grid-template-areas:
        ". data"
        ". data"
        ". data";
    grid-column-gap: 3rem;
    margin: 0 3rem;
`

export const Title = styled.h4`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.8rem;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    ${({ align }) => align === "right" && "text-align: right;"}
`

export const Para = styled.p`
    font-family: var(--body);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    ${({ align }) => align === "right" && "text-align: right;"}
    ${({ metric }) => metric && `justify-self: end;`}
    ${({ stat }) => stat && `
        font-size: 3.6rem;
        justify-self: end;
    `}
    ${({ unit }) => unit && `margin-left: 0.5rem;`}
`

export const Data = styled.div`
    grid-area: data;
    display: grid;
    grid-template: auto auto auto auto / 1fr;
    align-content: space-between;
    grid-row-gap: 1.5rem;
`
export const Stat = styled.div`
    width: 100%;
    display: grid;
    grid-template: 1fr / 1fr 2fr;
    grid-column-gap: 3rem;
    align-items: baseline;
`

export const Metric = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
`