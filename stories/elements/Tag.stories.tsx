import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { getEnumValuesWithUndefined, getUndefinedPropsFromUndefinedStringProps } from '../../.storybook/utils'
import { Accent, Icon, THEME, Tag, TagBullet } from '../../src'

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
    },
    color: {
      control: 'color'
    },
    backgroundColor: {
      control: 'color'
    },
    withBullet: {
      control: 'boolean'
    },
    iconColor: {
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
    <TagsContainer>
      <Tag accent={Accent.PRIMARY} {...normalizedProps}>
        A primary tag
      </Tag>
      <Tag accent={Accent.SECONDARY} {...normalizedProps}>
        A secondary tag
      </Tag>
      <Tag accent={Accent.TERTIARY} {...normalizedProps}>
        A tertiary tag
      </Tag>
      <Tag accent={Accent.TERTIARY} withBullet {...normalizedProps}>
        A tertiary tag with bullet
      </Tag>
      <Tag iconColor={THEME.color.mediumSeaGreen} withBullet {...normalizedProps}>
        A tag with a green bullet
      </Tag>
      <Tag bullet={TagBullet.DISK} bulletColor={THEME.color.mediumSeaGreen} {...normalizedProps}>
        A tag with a green bullet OLD VERSION
      </Tag>
      <Tag borderColor={THEME.color.slateGray} {...normalizedProps}>
        A tag with a border
      </Tag>
      <Tag
        backgroundColor={THEME.color.maximumRed15}
        color={THEME.color.charcoal}
        Icon={Icon.Link}
        {...normalizedProps}
      >
        A tag with custom colors and icon
      </Tag>
    </TagsContainer>
  )
}

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
