import { GlobalDecorator } from './components/GlobalDecorator'

import 'rsuite/dist/rsuite.min.css'
import '../src/assets/stylesheets/rsuite-override.css'

export const decorators = [GlobalDecorator]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
