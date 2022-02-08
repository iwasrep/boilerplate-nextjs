import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
// Cores padrão através de variáveis
:root{
  --background: #1a1a1a;
  --white: #eeeeee;

  --container: 100rem;

  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;
}

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
  background: var(--background);
  color: var(--white);
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxigen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

p {
  font-size: 2rem;
  line-height: var(--medium);
}
`

export default GlobalStyles
