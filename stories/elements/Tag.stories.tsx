import { Showcase } from '../../.storybook/components/Showcase'
import { ACCENTS_AS_ARRAY } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Icon, THEME, Tag } from '../../src'

import type { TagProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

const args: TagProps = {
  accent: Accent.PRIMARY,
  backgroundColor: undefined,
  borderColor: undefined,
  children: 'A tag',
  color: undefined,
  Icon: undefined,
  iconColor: undefined,
  isLight: false,
  withCircleIcon: false
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
    iconColor: {
      control: {
        type: 'color'
      }
    },
    withCircleIcon: {
      control: 'boolean'
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

      <Showcase style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Tag accent={Accent.PRIMARY}>A primary tag</Tag>
        <Tag accent={Accent.SECONDARY}>A secondary tag</Tag>
        <Tag accent={Accent.TERTIARY}>A tertiary tag</Tag>

        <Tag borderColor={THEME.color.slateGray}>A tag with a border</Tag>
        <Tag backgroundColor={THEME.color.maximumRed15} color={THEME.color.charcoal} Icon={Icon.Confirm} withCircleIcon>
          A tag with custom colors and circle icon
        </Tag>
        <Tag backgroundColor={THEME.color.mediumSeaGreen} color={THEME.color.white} Icon={Icon.Link}>
          A tag with custom colors and icon
        </Tag>
      </Showcase>
    </>
  )
}
