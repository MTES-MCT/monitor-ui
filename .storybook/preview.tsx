import { GlobalDecorator } from './components/GlobalDecorator'

import 'rsuite/dist/rsuite.min.css'

export const decorators = [GlobalDecorator]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
