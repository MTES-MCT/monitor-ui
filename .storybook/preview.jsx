import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { THEME } from '../src/theme'

import 'rsuite/dist/rsuite.min.css'
import '../src/assets/rsuite-override.css'

const GlobalStyle = createGlobalStyle`
  p {
    margin-bottom: 1rem;
  }
`

export const decorators = [
  Story => (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <Story />
    </ThemeProvider>
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
