import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Tag, TagGroup } from '../../src'

import type { TagGroupProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TagGroupProps = {}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<TagGroupProps> = {
  title: 'Elements/TagGroup',
  component: TagGroup,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

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
