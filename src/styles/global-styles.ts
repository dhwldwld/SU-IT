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
  a, button { 
    padding: 0;
    cursor: pointer;
    text-decoration: none;  
  }
  ul, li {
    list-style: none;
    padding: 0;
  }
`;