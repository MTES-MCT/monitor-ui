import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Legend } from '../../src'

import type { LegendProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: LegendProps = {
  children: 'A form fieldset legend',
  disabled: false,
  isHidden: false
}

const meta: Meta<LegendProps> = {
  title: 'Elements/Legend',
  component: Legend,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Legend(props: LegendProps) {
  return <Legend {...props} />
}
