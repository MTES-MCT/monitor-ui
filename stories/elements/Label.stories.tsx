import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Label } from '../../src'

import type { LabelProps } from '../../src'

const args: LabelProps = {
  children: 'A form input label',
  isHidden: false
}

export default {
  title: 'Elements/Label',
  component: Label,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _Label(props: LabelProps) {
  return <Label {...props} />
}
