import { ThemeProvider } from 'styled-components'

import { THEME } from '../src/theme'

import 'rsuite/dist/rsuite.min.css'
import '../src/assets/rsuite-override.css'

export const decorators = [
  Story => (
    <ThemeProvider theme={THEME}>
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
