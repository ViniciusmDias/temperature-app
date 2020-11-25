import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button, a {
    font: 12px 'Arimo', sans-serif;
    letter-spacing: 0.5px;
  }
  @media (min-width: 760px) {
    font-size: 14px;

  }
  #root {
    padding: 0 8vw;
    max-width: 960px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
