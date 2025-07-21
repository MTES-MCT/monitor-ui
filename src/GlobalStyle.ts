import { createGlobalStyle } from 'styled-components'

// @ts-ignore
import MarianneBold from './assets/fonts/Marianne-Bold.woff2'
// @ts-ignore
import MarianneBoldItalic from './assets/fonts/Marianne-Bold_Italic.woff2'
// @ts-ignore
import MarianneLight from './assets/fonts/Marianne-Light.woff2'
// @ts-ignore
import MarianneLightItalic from './assets/fonts/Marianne-Light_Italic.woff2'
// @ts-ignore
import MarianneMedium from './assets/fonts/Marianne-Medium.woff2'
// @ts-ignore
import MarianneMediumItalic from './assets/fonts/Marianne-Medium_Italic.woff2'
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
    src: local('Marianne'), local('Marianne-Regular'), url(${MarianneRegular}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 300;
    src: local('Marianne-Thin'), url(${MarianneLight}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 500;
    src:local('Marianne-Medium'), url(${MarianneMedium}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 500;
    font-style: italic;
    src: local('Marianne-Medium_Italic'), url(${MarianneMediumItalic}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: lighter;
    font-style: italic;
    src: local('Marianne-Thin_Italic'), url(${MarianneLightItalic}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: normal;
    font-style: italic;
    src:local('Marianne-Regular_Italic'), url(${MarianneItalic}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-weight: 700;
    src: local('Marianne-Bold'), url(${MarianneBold}) format('woff2');
  }

  @font-face {
    font-family: Marianne;
    font-style: italic;
    font-weight: 700;
    src: local('Marianne-Bold_Italic'), url(${MarianneBoldItalic}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-stretch: 100%;
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegular}) format('woff2');
  }

  body {
    color: ${p => p.theme.color.gunMetal};
    font-family: Marianne, sans-serif;
    font-size: 16px;
    line-height: 1.3846;
  }

  .rs-highlight-mark,
  mark {
    border-radius: 0;
    margin: 0;
    padding: 0;
    background-color: #cccfd6;
  }

`
