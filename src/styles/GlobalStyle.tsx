import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import colors from 'styles/colors';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: inherit;
    
    ::-webkit-scrollbar {
      display:none;
    } 
    ::-webkit-scrollbar-track {
      display:none;
    } 
    ::-webkit-scrollbar-thumb {
      display:none;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }

  @supports (font: -apple-system-body) {
    html{
      font: -apple-system-body;
    }
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none
    color: ${colors.grey700};
  }
  a:visited {
   color: black;
  }
  a:hover {
    color: ${colors.teal700};
  }

`;

export default GlobalStyle;
