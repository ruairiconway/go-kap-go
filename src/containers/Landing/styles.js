import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    max-width: 100%;
    // height: calc(100vh - 35px - 3.5em);
    grid-template: 1fr / 1fr 2fr;
    grid-auto-flow: column;
    grid-column-gap: 3rem;
    padding-top: 3rem;

    @media (max-width: 1080px) {
        grid-template: 50vh 1fr / 1fr;
        grid-row-gap: 3rem;
    }
`

export const SubSection = styled.div`
    ${({ className }) => className === "sub-1" && `
        max-height: 100%;
        max-width: 100%;
        display: grid;
        // grid-template: 1fr 1fr 1fr / 1fr min-content 2fr;

        .callout-title {
            grid-row: 2 / span 2;
            grid-column: 2 / span 1;
            align-self: end;
            z-index: 1;

            @media (max-width: 1080px) {
                display: none;
            }
        }

        .img-title {
            filter: grayscale(100%);
            grid-row: 1 / span 2;
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
        grid-row-gap: 3rem;
        grid-column-gap: 3rem;

        @media (max-width: 1080px) {
            grid-template: auto / 1fr;
            grid-template-areas:
                "text-1"
                "social"
                "callout-1"
                "text-2"
                "gfm" ;
        }

        .text-1 {
            grid-area: text-1;

            > h3 {
                margin: 0;
            }

            @media (max-width: 1080px) {
                
                h2, h3 {
                    text-align: center;
                }

                > h2 {
                    font-size: 3.6rem;
                    margin: 0 0 .9rem 0;
                }
            }
        } 

        .social {
            grid-area: social;
            justify-self: end;
            align-self: end;

            @media (max-width: 1080px) {
                justify-self: center;
            }
        }

        .text-2 {
            grid-area: text-2;
        }

        .callout-1 {
            grid-area: callout-1;
            justify-self: end;
            align-self: center;

            @media (max-width: 1080px) {
                > div> p:first-child {
                    font-size: 3.6rem;
                }

                justify-self: stretch;
            }
        }

        .text-3 {
            grid-area: text-3;
            justify-self: end;
            align-self: center;

            @media (max-width: 1080px) {
                display: none;
            }
        }

        .gofundme {
            grid-area: gfm;
            justify-self: stretch;
            align-self: center;
        }
    `}
`