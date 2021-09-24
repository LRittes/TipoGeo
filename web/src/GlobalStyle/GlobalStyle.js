import styled, { createGlobalStyle } from 'styled-components'

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
        overflow-x: hidden;
    }
`

export const Container = styled.div`
    width: 85vw;
    margin: 0 auto;
`
