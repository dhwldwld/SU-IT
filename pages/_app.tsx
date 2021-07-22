import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles/global-styles';
import {theme} from '../src/styles/theme';
import '../src/styles/Burger.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({Component, pageProps}: AppProps) {

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
  );
}