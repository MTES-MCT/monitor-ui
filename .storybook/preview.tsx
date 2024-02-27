/* eslint-disable @typescript-eslint/naming-convention */

// https://github.com/storybookjs/storybook/issues/18641#issuecomment-1304197910
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
import React from 'react'

// import { DocumentationBox } from './components/DocumentationBox'
import { withStoryBox } from './components/StoryBox'

import type { Preview } from '@storybook/react'

import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.min.css'
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
