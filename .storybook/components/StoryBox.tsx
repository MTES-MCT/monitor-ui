import { StrictMode } from 'react'
import { CustomProvider as RsuiteCustomProvider } from 'rsuite'
import rsuiteFrFr from 'rsuite/locales/fr_FR'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from '../../src'

import type { StoryFn } from '@storybook/react'

const CustomGlobalStyle: any = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    padding: 0;
  }

  code {
    background-color: #1e1e1e;
    color: #ffffff;
    font-size: 12px;
    padding: 2px 6px;
    vertical-align: 1px;
  }

  #storybook-root {
    height: 100%;
    width: 100%;
  }
`

export function StoryBox({ children }) {
  return (
    <StrictMode>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <CustomGlobalStyle />

        <RsuiteCustomProvider locale={rsuiteFrFr}>{children}</RsuiteCustomProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export function withStoryBox(Story: StoryFn<any>) {
  return (
    <StoryBox>
      {/*@ts-ignore*/}
      <Story />
    </StoryBox>
  )
}
