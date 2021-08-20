import styled from 'styled-components'

export const Wrapper = styled.button`
    font-family: var(--header);
    font-weight: 400;
    font-size: 3.6rem;
    letter-spacing: 2px;
    line-height: 150%;
    text-transform: uppercase;
    padding: 1rem 3rem;
    border: none;
    background: var(--dark);
    color: var(--light);
    box-shadow: var(--base-shadow);
    cursor: pointer;
    transition: 0.1s ease-out;

    &:hover,
    &:focus {
        color: var(--pink);
        transform: var(--hover-translate);
        box-shadow: var(--hover-shadow);
    }

    &:active {
        transform: var(--active-translate);
        box-shadow: var(--active-shadow);
    }
`