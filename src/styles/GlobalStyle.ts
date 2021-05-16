import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body  {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: black;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.4rem;
    color: white;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing:  grayscale;
    #root {
      height: 100%;
      width: 100%;
    }
    a {
      text-decoration:  none;
      &:hover  {
        text-decoration:  underline;
      }
    }
    code  {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
  }
`;

export default GlobalStyle;
