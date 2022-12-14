import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Legend } from '../../src'

import type { LegendProps } from '../../src'

const args: LegendProps = {
  children: 'A form fieldset legend',
  isHidden: false
}

export default {
  title: 'Elements/Legend',
  component: Legend,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _Legend(props: LegendProps) {
  return <Legend {...props} />
}
