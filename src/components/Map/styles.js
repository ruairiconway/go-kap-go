import styled from 'styled-components'

export const Wrapper = styled.div`
    ${({ latest }) => latest && `grid-area: map;`}
    background: light-blue;
    box-shadow: var(--base-shadow);
`