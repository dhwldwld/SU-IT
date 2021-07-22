import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    deviceSizes: {
      MobileS: string
      MobileM: string
      MobileL: string
      Tablet: string
      Laptop: string
      DesktopS: string
      DesktopM: string
      DesktopL: string
    }
    fontSize: {
      largeTitle: string
      title: string
      subTitle: string
      description: string
      middleText: string
      smallText: string
    }
    colors: {
      black: string
      white: string
      gray: string
      primary: string
      sub: string
      BFD: string
      ERP: string
      HMH: string
      FRS: string
      KIWINOMICS: string
      TAXI: string
    }
  }
}
