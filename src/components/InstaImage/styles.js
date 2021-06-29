import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    transition: 0.3s;

    ::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    filter: grayscale(${({ hovered }) => !hovered ? "1" : "0"});
` 

export const Image = styled.img`
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
`

export const Link = styled.a`
    
`