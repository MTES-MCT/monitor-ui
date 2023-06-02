import { GlobalDecorator } from './components/GlobalDecorator'

import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.min.css'
import '../src/assets/stylesheets/rsuite-override.css'

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
