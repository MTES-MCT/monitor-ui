import { StrictMode } from 'react'
import { CustomProvider as RsuiteCustomProvider } from 'rsuite'
import rsuiteFrFr from 'rsuite/locales/fr_FR'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from '../../src'

import type { StoryFn } from '@storybook/react'

const UntypedGlobalStyle = GlobalStyle as any
const UntypedThemeProvider = ThemeProvider as any

const CustomGlobalStyle: any = createGlobalStyle`
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

export function GlobalDecorator(Story: StoryFn<any>) {
  return (
    <GlobalDecoratorWrapper>
      <Story />
    </GlobalDecoratorWrapper>
  )
}

export function GlobalDecoratorWrapper({ children }) {
  return (
    <StrictMode>
      <UntypedThemeProvider theme={THEME}>
        <UntypedGlobalStyle />
        <CustomGlobalStyle />

        <RsuiteCustomProvider locale={rsuiteFrFr}>{children}</RsuiteCustomProvider>
      </UntypedThemeProvider>
    </StrictMode>
  )
}
