import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { ExclamationPoint, THEME } from '../../src'

import type { ExclamationPointProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: ExclamationPointProps = {
  color: THEME.color.white,
  backgroundColor: THEME.color.goldenPoppy
}

const meta: Meta<ExclamationPointProps> = {
  title: 'Symbols/ExclamationPoint',
  component: ExclamationPoint,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _ExclamationPoint(props: ExclamationPointProps) {
  return <ExclamationPoint {...props} />
}
