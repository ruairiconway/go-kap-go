import styled from 'styled-components'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 1em;
    left: 1em;
    height: 35px;
    width: calc(100% - 2em);
    background: var(--dark);

    a {
        color: var(--light);
    }
`

export const Logo = styled.div`
    margin: 0 0 0 8.5em;
    height: 35px;

    a {
        display: flex;
        align-items: center;
        height: 100%;
        font-family: var(--header);
        font-weight: 400;
        font-size: 1.9em;
        text-align: left;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-decoration: none;
    }

    span {
        color: var(--pink);
    }

    svg {
        margin: 0 0 0 1.5em;
        height: 66%;
        width: auto;
    }
`

export const Nav = styled.nav`
    margin: 0 8.5em 0 0;

    ul {
        display: flex;
        flex-flow: row nowrap;
        padding: 0;
        margin: 0;
    }
`

export const NavItem = styled.li`
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 200px;
    height: 35px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-family: var(--body);
        font-weight: 600;
        font-size: 1.8em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-decoration: none;
        background:${({ pinkBtn }) => ( pinkBtn && "var(--pink)" )};
    }
`