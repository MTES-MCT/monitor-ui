import { StrictMode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { GlobalStyle, THEME } from '../src'

import type { ComponentStory } from '@storybook/react'
// import type { ComponentAnnotations } from '@storybook/csf'

import 'rsuite/dist/rsuite.min.css'
import '../src/assets/stylesheets/rsuite-override.css'

const UntypedGlobalStyle = GlobalStyle as any
const UntypedThemeProvider = ThemeProvider as any

const CustomGlobalStyle: any = createGlobalStyle<{
  isFullWidth: boolean | undefined
}>`
  p {
    margin-bottom: 1rem;
  }

  #root {
    width: ${p => (p.isFullWidth ? '100%' : '40rem')};
  }
`

export const decorators = [
  (Story: ComponentStory<any>, annotations: any /** ComponentAnnotations */) => {
    const isFullWidth = ['Icon'].includes(annotations.title)

    return (
      <StrictMode>
        <UntypedThemeProvider theme={THEME}>
          <UntypedGlobalStyle />
          <CustomGlobalStyle isFullWidth={isFullWidth} />

          <Story />
        </UntypedThemeProvider>
      </StrictMode>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
