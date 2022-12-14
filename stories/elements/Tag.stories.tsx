import { values } from 'ramda'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Tag } from '../../src'
import { TagBullet } from '../../src/elements/Tag/constants'

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
      options: values(Accent)
    },
    bullet: {
      control: 'inline-radio',
      options: values(TagBullet)
    },
    color: {
      control: 'color',
      if: { arg: 'accent', truthy: false }
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
  return (
    <>
      <Tag {...props} />
    </>
  )
}
