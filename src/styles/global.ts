import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body, #__next{
  width: 100%;
  height: 100%;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxigen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased !important;
}
`

export default GlobalStyles
