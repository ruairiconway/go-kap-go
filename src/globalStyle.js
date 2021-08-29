import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    :root {
        // COLOR
        --dark: #111111;
        --dark-alt: #252525;
        --light: #FFFFFF;
        --pink: #E55EB1;
        --shadow: #C4C4C4;

        // TYPE
        --header: 'Anton', sans-serif;
        --body: 'Zilla Slab', serif;

        // SHADOW
        --base-shadow: -7.5px 7.5px 0px #E5E5E5;
        --hover-shadow: -4.5px 4.5px 0px #B4B4B4;
        --active-shadow: 0px 0px 0px #E5E5E5;

        // TRANSLATE
        --hover-translate: translate(-3px, 3px);
        --active-translate: translate(-7.5px, 7.5px);
    }

    * {
        box-sizing: border-box;
    }

    html {
        margin: 0;
        font-size: 10px;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }

    body {
        margin: 0;
        min-height: 100vh;
    }

    img {
        object-fit: cover;
    }

    main {
        margin: 0 calc(35px + 4rem) 0 3rem;
        padding: calc(35px + 2rem) 0 0 0;
        
        @media (max-width: 1080px) {
            margin: 1rem;
        }

        > * {
            margin: 0 0 15rem 0;
        }

        > :last-child {
            margin: 0;
        }
    }

`

export default GlobalStyle