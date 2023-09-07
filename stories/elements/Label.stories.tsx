import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Label } from '../../src'

import type { LabelProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: LabelProps = {
  children: 'A form input label',
  disabled: false,
  isHidden: false
}

const meta: Meta<LabelProps> = {
  title: 'Elements/Label',
  component: Label,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Label(props: LabelProps) {
  return <Label {...props} />
}
