import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoint: {
      Mobile: number,
      TabletM: number,
      TabletL: number,
      DesktopS: number,
      DesktopM: number,
      DesktopL: number,
    },
    fontSize: {
      largeTitle: number;
      title: number;
      subTitle: number;
      description: number;
      smallText: number;
    }
    colors: {
      black: string;
      white: string;
      primary: string;
      sub: string;
      BFD: string;
      ERP: string;
      HMH: string;
      FRS: string;
      KIWINOMICS: string;
      TAXI: string;
    };
  }
}
