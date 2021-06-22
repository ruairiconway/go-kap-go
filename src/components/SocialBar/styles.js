import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    width: max-content;
    padding: 2.5rem;

    ${({ stacked }) => stacked ? `
        grid-template-areas: 
            ". a"
            "b c";
    `:`
        grid-template-areas: 
            "a b c";
    `}
`

export const Link = styled.a`

    ${({ order }) => order === "1" && "grid-area: a;"}
    ${({ order }) => order === "2" && "grid-area: b;"}
    ${({ order }) => order === "3" && "grid-area: c;"}

    svg {
        color: var(--dark);
        transition: 0.2s;

        &:hover {
            color: var(--pink);
        }
    }

`