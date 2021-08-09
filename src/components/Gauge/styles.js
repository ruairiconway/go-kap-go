import styled from "styled-components"

export const Wrapper = styled.div`
    position: fixed;
    width: 35px;
    right: 1em;
    bottom: 1em;
    height: calc(100vh - 35px - 3em);
    background: var(--dark);
    z-index: 1;
`

export const FundBar = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${({ raised }) => raised || "0"}%;
    border: solid var(--light);
    border-width: 2px 0 0 0;
    background: var(--pink);
`

export const NumDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 1em;
    height: 35px;
    transform-origin: right;
    transform: rotate(-90deg) translate(1em,-50%);
    z-index: 1;
`

export const Num = styled.p`
    display: block;
    margin: 0;
    font-family: var(--body);
    font-weight: 600;
    font-size: 1.8em;
    letter-spacing: 1.5px;
    text-align: right;
    color: var(--light);
`

export const Barlines = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35px;
    height: 90%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
`

export const Line = styled.div`
    width: 33%;
    height: 2px;
    background: var(--light);


`