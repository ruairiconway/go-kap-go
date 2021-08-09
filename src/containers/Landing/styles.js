import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    max-width: 100%;
    max-height: calc(100vh - 35px - 3.5em);
    grid-template: 1fr / 1fr 2fr;
    grid-auto-flow: column;
    grid-column-gap: 6rem;
    padding-top: 3rem;
`

export const SubSection = styled.div`
    ${({ className }) => className === "sub-1" && `
        max-height: 100%;
        max-width: 100%;
        display: grid;
        grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;

        .callout-title {
            grid-row: 1 / span 2;
            grid-column: 2 / span 1;
            align-self: start;
            z-index: 1;
        }

        .img-title {
            grid-row: 2 / span 2;
            grid-column: 1 / span 3;
            justify-self: stretch;
            align-self: stretch;
        }
    `}
    ${({ className }) => className === "sub-2" && `
        max-height: 100%;
        max-width: 100%;
        display: grid;
        grid-template: auto auto auto 1fr / min-content 1fr auto;
        grid-template-areas:
            "text-1 text-1 social"
            "text-2 text-2 text-2"
            "callout-1 gfm gfm"
            "text-3 gfm gfm";
        grid-row-gap: 6rem;
        grid-column-gap: 6rem;

        .text-1 {
            grid-area: text-1;

            > h3 {
                margin: 0;
            }
        } 

        .social {
            grid-area: social;
            justify-self: end;
            align-self: end;
        }

        .text-2 {
            grid-area: text-2;
        }

        .callout-1 {
            grid-area: callout-1;
            justify-self: end;
            align-self: center;
        }

        .text-3 {
            grid-area: text-3;
            justify-self: end;
            align-self: center;
        }

        .gofundme {
            grid-area: gfm;
            justify-self: stretch;
            align-self: center;
        }
    `}
`