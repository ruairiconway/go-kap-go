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
    }

    * {
        box-sizing: border-box;
    }

    html {
        margin: 0;
        font-size: 10px;
    }

    h1, h2, h3, h4, p {
        margin 0;
    }

    body {
        margin: 0;
        min-height: 100vh;
    }

    img {
        object-fit: cover;
    }

    main {
        margin: calc(35px + 2rem) calc(35px + 4rem) 0 3rem;

        > * {
            margin: 0 0 9rem 0;
        }

        > :last-child {
            margin: 0;
        }
    }

`

export default GlobalStyle