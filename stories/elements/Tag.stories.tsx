import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { getEnumValuesWithUndefined, getUndefinedPropsFromUndefinedStringProps } from '../../.storybook/utils'
import { Accent, Tag, TagBullet } from '../../src'

import type { TagProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TagProps = {
  children: 'A tag',
  isLight: false
}

const meta: Meta<TagProps> = {
  title: 'Elements/Tag',
  component: Tag,

  argTypes: {
    accent: {
      control: 'inline-radio',
      options: getEnumValuesWithUndefined(Accent)
    },
    bullet: {
      control: 'inline-radio',
      options: getEnumValuesWithUndefined(TagBullet)
    },
    bulletColor: {
      control: 'color'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export default meta

export function _Tag(props: TagProps) {
  const normalizedProps = getUndefinedPropsFromUndefinedStringProps(props)

  return (
    <>
      <Tag {...normalizedProps} />
    </>
  )
}
