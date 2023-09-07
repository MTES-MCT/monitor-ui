import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Tag, TagGroup } from '../../src'

import type { TagGroupProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TagGroupProps = {}

const meta: Meta<TagGroupProps> = {
  title: 'Elements/TagGroup',
  component: TagGroup,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _TagGroup(props: TagGroupProps) {
  return (
    <>
      <TagGroup {...props}>
        <Tag accent={Accent.PRIMARY}>First tag</Tag>
        <Tag accent={Accent.SECONDARY}>Second tag</Tag>
        <Tag accent={Accent.TERTIARY}>Third tag</Tag>
      </TagGroup>
    </>
  )
}
