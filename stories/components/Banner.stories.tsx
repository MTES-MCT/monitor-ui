import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Level, THEME } from '../../src'
import { Banner } from '../../src/components/Banner'

import type { BannerProps } from '../../src/components/Banner'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<BannerProps> = {
  ...META_DEFAULTS,

  title: 'Components/Banner',
  component: Banner,

  argTypes: {
    isHiddenByDefault: ARG_TYPE.OPTIONAL_BOOLEAN,
    level: ARG_TYPE.OPTIONAL_LEVEL,
    isCollapsible: ARG_TYPE.BOOLEAN,
    isClosable: ARG_TYPE.BOOLEAN
  },

  args: {
    isHiddenByDefault: false,
    isCollapsible: true,
    isClosable: false,
    level: Level.SUCCESS,
    children: 'This is the content of the banner',
    top: '76px'
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Banner(props: BannerProps) {
  return (
    <div>
      <div
        style={{
          backgroundColor: THEME.color.charcoal,
          height: '60px',
          width: '100%'
        }}
      >
        <h2 style={{ color: THEME.color.white }}>This is a header</h2>
      </div>
      <Banner {...props} />
    </div>
  )
}
