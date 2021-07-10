import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: 'Noto Sans KR', sans-serif;}
  a { 
    cursor: pointer;
    text-decoration: none;  
  }
`;