import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #2c2c2c;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
  }
`;
