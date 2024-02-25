import { Showcase } from '../../.storybook/components/Showcase'
import { ACCENTS_AS_ARRAY, TAG_BULLETS_AS_ARRAY } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Icon, THEME, Tag, TagBullet } from '../../src'

import type { TagProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TagProps = {
  accent: Accent.PRIMARY,
  backgroundColor: undefined,
  borderColor: undefined,
  bullet: undefined,
  bulletColor: undefined,
  children: 'A tag',
  color: undefined,
  Icon: undefined,
  iconColor: undefined,
  isLight: false,
  withBullet: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<TagProps> = {
  title: 'Elements/Tag',
  component: Tag,

  argTypes: {
    accent: {
      control: 'radio',
      options: ACCENTS_AS_ARRAY
    },
    bullet: {
      control: 'radio',
      options: [...TAG_BULLETS_AS_ARRAY, undefined]
    },
    bulletColor: {
      control: {
        type: 'color'
      }
    },
    color: {
      control: {
        type: 'color'
      }
    },
    backgroundColor: {
      control: {
        type: 'color'
      }
    },
    withBullet: {
      control: 'boolean'
    },
    iconColor: {
      control: {
        type: 'color'
      }
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Tag(props: TagProps) {
  return (
    <>
      <Tag {...props}>A tag</Tag>

      <Showcase style={{ display: 'flex', flexDirection: 'column' }}>
        <Tag accent={Accent.SECONDARY}>A secondary tag</Tag>
        <Tag accent={Accent.TERTIARY}>A tertiary tag</Tag>
        <Tag accent={Accent.TERTIARY} withBullet>
          A tertiary tag with bullet
        </Tag>
        <Tag iconColor={THEME.color.mediumSeaGreen} withBullet>
          A tag with a green bullet
        </Tag>
        <Tag bullet={TagBullet.DISK} bulletColor={THEME.color.mediumSeaGreen}>
          A tag with a green bullet OLD VERSION
        </Tag>
        <Tag borderColor={THEME.color.slateGray}>A tag with a border</Tag>
        <Tag backgroundColor={THEME.color.maximumRed15} color={THEME.color.charcoal} Icon={Icon.Link}>
          A tag with custom colors and icon
        </Tag>
      </Showcase>
    </>
  )
}
