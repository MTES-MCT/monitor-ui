import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { THEME } from '../src/theme'

import 'rsuite/dist/rsuite.min.css'
import '../src/assets/rsuite-override.css'
import { StrictMode } from 'react'

const GlobalStyle = createGlobalStyle`
  p {
    margin-bottom: 1rem;
  }
`

export const decorators = [
  Story => (
    <StrictMode>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />

        <Story />
      </ThemeProvider>
    </StrictMode>
  )
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
