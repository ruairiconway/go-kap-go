import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    grid-template: auto auto auto 1fr / 10% 1fr 2fr 2fr;
    grid-template-areas: 
        ". . header header"
        ". . para-header para"
        ". . . para"
        ". . . link";
    grid-row-gap: 6rem;
    grid-column-gap: 3rem;
    max-height: calc(100vh - 35px - 6rem);

    .header {
        grid-area: header;
    }

    .para-header {
        grid-area: para-header;
    }

    .para {
        grid-area: para;
    }

    .image1 {
        grid-row: 1 / span 3;
        grid-column: 1 / span 2;
        justify-self: stretch;
        align-self: stretch;
    }
    
    .image2 {
        grid-row: 3 / span 2;
        grid-column: 2 / span 2;
        justify-self: stretch;
        align-self: stretch;
    }

    .link {
        grid-area: link;
        justify-self: start;
        align-self: start;
        margin: 0 3rem;
    }
`