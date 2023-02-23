import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { getEnumValuesWithUndefined, getUndefinedPropsFromUndefinedStringProps } from '../../.storybook/utils'
import { Accent, Tag, TagBullet } from '../../src'

import type { TagProps } from '../../src'

const args: TagProps = {
  children: 'A tag',
  isLight: false
}

export default {
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

export function _Tag(props: TagProps) {
  const normalizedProps = getUndefinedPropsFromUndefinedStringProps(props)

  return (
    <>
      <Tag {...normalizedProps} />
    </>
  )
}
