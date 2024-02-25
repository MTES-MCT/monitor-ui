import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Radio } from '../../src'

import type { RadioProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<RadioProps> = {
  ...META_DEFAULTS,

  title: 'Fields/Radio',
  component: Radio,

  argTypes: {
    checked: ARG_TYPE.OPTIONAL_BOOLEAN,
    className: ARG_TYPE.NO_CONTROL,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    hasError: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL
  },

  args: {
    checked: false,
    children: 'A single radio option',
    disabled: false,
    hasError: false,
    isLight: false,
    isTransparent: false,
    name: 'myRadio',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withPseudoStateButtons: { targetSelector: '.rs-radio-checker' }
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Radio(props: RadioProps) {
  return <Radio {...props} />
}
