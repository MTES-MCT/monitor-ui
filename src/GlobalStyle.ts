import { createGlobalStyle } from 'styled-components'

// @ts-ignore
import MarianneBold from './assets/fonts/Marianne-Bold.woff2'
// @ts-ignore
import MarianneMedium from './assets/fonts/Marianne-Medium.woff2'
// @ts-ignore
import MarianneRegular from './assets/fonts/Marianne-Regular.woff2'
// @ts-ignore
import MarianneItalic from './assets/fonts/Marianne-Regular_Italic.woff2'
// @ts-ignore
import OpenSansRegular from './assets/fonts/OpenSans-Regular.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Marianne;
    font-weight: normal;
    font-display: swap;
    src: local('Marianne'), local('Marianne-Regular'), url(${MarianneRegular}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 500;
    font-display: swap;
    src:local('Marianne-Medium'), url(${MarianneMedium}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    src:local('Marianne-Regular_Italic'), url(${MarianneItalic}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 700;
    font-display: swap;
    src: local('Marianne-Bold'), url(${MarianneBold}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-stretch: 100%;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${OpenSansRegular}) format('woff2');
  }

  body {
    color: ${p => p.theme.color.gunMetal};
    font-family: Marianne, sans-serif;
    font-size: 16px;
    line-height: 1.3846;
  }

`
