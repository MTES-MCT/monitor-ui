// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Icon } from '@constants'
import { THEME } from '@theme'
import { Tooltip } from 'components/Tooltip/Tooltip'

import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  title: 'Components/Tooltip',
  component: Tooltip,

  argTypes: {},

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Tooltip() {
  return (
    <div style={{ height: '500px' }}>
      <Tooltip>Hi ! I&apos;m a tooltip</Tooltip>
      <Tooltip Icon={Icon.AttentionFilled}>Hi ! I&apos;m a tooltip without another icon</Tooltip>
      <Tooltip color={THEME.color.maximumRed} Icon={Icon.Fishery}>
        Hi ! I&apos;m a tooltip without another icon and another color
      </Tooltip>
    </div>
  )
}
