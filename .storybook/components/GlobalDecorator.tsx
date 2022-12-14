import { StrictMode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from '../../src'

import type { ComponentStory } from '@storybook/react'

const UntypedGlobalStyle = GlobalStyle as any
const UntypedThemeProvider = ThemeProvider as any

const CustomGlobalStyle: any = createGlobalStyle`
  html,
  body.sb-show-main.sb-main-padded {
    height: 100%;
    padding: 0;
    width: 100%;
  }

  code {
    background-color: #1e1e1e;
    color: #ffffff;
    font-size: 12px;
    padding: 2px 6px;
    vertical-align: 1px;
  }

  p {
    background-color: #eeeeee;
    line-height: 1.75;
    padding: 4px 8px;
  }
  * > p:not(:last-child) {
    margin-bottom: 16px;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`

export function GlobalDecorator(Story: ComponentStory<any>) {
  return (
    <StrictMode>
      <UntypedThemeProvider theme={THEME}>
        <UntypedGlobalStyle />
        <CustomGlobalStyle />

        <Story />
      </UntypedThemeProvider>
    </StrictMode>
  )
}
