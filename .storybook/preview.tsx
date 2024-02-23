/* eslint-disable @typescript-eslint/naming-convention */

import { GlobalDecorator } from './components/GlobalDecorator'

import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.min.css'
import '../src/assets/stylesheets/rsuite-override.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [GlobalDecorator],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: false
      }
    },
    viewMode: 'docs'
  }
}

// eslint-disable-next-line import/no-default-export
export default preview
