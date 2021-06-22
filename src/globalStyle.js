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

    main {
        margin: calc(35px + 2em) calc(35px + 2em) 1em 1em;
    }

`

export default GlobalStyle