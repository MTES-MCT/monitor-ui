import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { SingleTag, noop } from '../../src'

import type { SingleTagProps } from '../../src'

const args: SingleTagProps = {
  children: 'A single deletable tag',
  onDelete: noop
}

export default {
  title: 'Components/SingleTag',
  component: SingleTag,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _SingleTag(props: SingleTagProps) {
  return <SingleTag {...props} />
}
