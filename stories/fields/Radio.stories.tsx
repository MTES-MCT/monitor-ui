import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Radio } from '../../src'

import type { RadioProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: RadioProps = {
  checked: false,
  disabled: false,
  hasError: false,
  isLight: false,
  name: 'myRadio',
  readOnly: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<RadioProps> = {
  title: 'Fields/Radio',
  component: Radio,

  argTypes: {
    checked: {
      control: 'boolean'
    },
    className: {
      table: {
        disable: true
      }
    },
    disabled: {
      control: 'boolean'
    },
    isLight: {
      control: 'boolean'
    },
    style: {
      table: {
        disable: true
      }
    },
    readOnly: {
      control: 'boolean'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Radio(props: RadioProps) {
  return <Radio {...props} />
}
