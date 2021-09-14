import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }
` 

export const Title = styled.h1`
    font-size: 3.6rem;
`