import { values } from 'ramda'

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

  parameters: {
    design: {
      url: 'https://xd.adobe.com/view/b6d4c472-3fbe-4dec-9f14-38fe03872a3e-e387/screen/96f2fdee-dca5-4d84-8214-db82ae9c5a22/'
    }
  }
}

export function _Tag(props: TagProps) {
  return (
    <>
      <Tag {...props} />
    </>
  )
}
