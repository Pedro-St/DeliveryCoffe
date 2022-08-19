import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background: #FAFAFA;
        color: #272221;
        -webkit-font-smoothing: antialiased;
        font-family: roboto, sans-serif;
        font-size: 1.2rem;
        overflow-x: hidden;
    }
`
