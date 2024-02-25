import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Label } from '../../src'

import type { LabelProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: LabelProps = {
  children: 'A form input label',
  disabled: false,
  isHidden: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LabelProps> = {
  title: 'Elements/Label',
  component: Label,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Label(props: LabelProps) {
  return <Label {...props} />
}
