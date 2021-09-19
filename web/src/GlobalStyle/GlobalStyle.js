import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100vw;
        font-family: Arial, Helvetica, sans-serif;
    }
    ` 

export const Title = styled.h1`
    font-size: 3.6rem;
    text-align: center;
    position: fixed;
    top: 0;
    background-color: #fff;
    width: 85vw;
    text-align: center;
`

export const Container = styled.div`
    width: 85vw;
    margin: 0 auto;
`