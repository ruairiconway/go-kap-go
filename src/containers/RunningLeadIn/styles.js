import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    grid-template: auto 2fr auto / 55% 1fr auto;
    grid-template-areas:
        "text-box map ."
        "stats map ."
        "link map .";
    grid-row-gap: 6rem;
    grid-column-gap: 6rem;

    .text-box {
        grid-area: text-box;
    }

    .stats {
        grid-area: stats;
        justify-self: stretch;
        align-self: start;
    }

    .link {
        grid-area: link;
        justify-self: end;
        align-self: start;
    }

    .callout1 {
        grid-row: 1 / span 1;
        grid-column: 2 / span 2;
        justify-self: end;
        align-self: end;
    }

    .callout2 {
        grid-row: 2 / span 1;
        grid-column: 2 / span 2;
        justify-self: end;
        align-self: end;
    }
`