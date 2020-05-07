import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
    background-color: black;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  *, ::before, ::after {
    box-sizing: border-box;
  }
`
