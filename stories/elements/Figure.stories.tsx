import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Figure, type FigureProps } from '../../src'

import type { Meta } from '@storybook/react'

const args: FigureProps = {}

const meta: Meta<FigureProps> = {
  title: 'Elements/Figure',
  component: Figure,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Figure(props: FigureProps) {
  return (
    <div>
      <p>Both numbers should have exactly the same width:</p>

      <p>
        <code>
          <Figure {...props}>0123</Figure>
        </code>
      </p>
      <p>
        <code>
          <Figure {...props}>4567</Figure>
        </code>
      </p>
    </div>
  )
}
