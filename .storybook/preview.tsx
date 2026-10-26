/* eslint-disable @typescript-eslint/naming-convention */

// import { DocumentationBox } from './components/DocumentationBox'
import { withStoryBox } from './components/StoryBox'

import type { Preview } from '@storybook/react-vite'

// @ts-expect-error -- CSS module has no type declaration
import 'react-toastify/dist/ReactToastify.css'
// @ts-expect-error -- CSS module has no type declaration
import 'rsuite/dist/rsuite.min.css'
// @ts-expect-error -- CSS module has no type declaration
import '../src/assets/stylesheets/rsuite-override.css'

const preview: Preview = {
  decorators: [withStoryBox],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      codePanel: true,

      // TODO Error: `Cannot read properties of undefined (reading 'fonts')`.
      // container: DocumentationBox,
      toc: {
        disable: false,
        headingSelector: 'h1, h2, h3'
      }
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Colors']
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default preview
