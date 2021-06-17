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
    }

    html {
        margin: 0;
        font-size: 10px;
    }

    body {
        margin: 0;
        box-sizing: border-box;
        min-height: 100vh;
    }

`

export default GlobalStyle