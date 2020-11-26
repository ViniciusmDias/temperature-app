import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    --e-global-color-primary: #017af9;
    --e-global-color-secondary: rgb(000, 178, 051);
    --e-global-color-text: #3c3c3c;
    --e-global-color-items-background: #8e8e8e;
    --e-global-color-items-error: #c53030;
    --e-global-color-white:rgb(250,250,250) ;
  }

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
