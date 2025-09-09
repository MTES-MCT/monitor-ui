import { fn } from 'storybook/test'
import styled from 'styled-components'

import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Level, THEME } from '../../src'
import { Banner } from '../../src/components/Banner'

import type { BannerProps } from '../../src/components/Banner'
import type { Meta, StoryObj } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<BannerProps> = {
  ...META_DEFAULTS,

  title: 'Components/Banner',
  component: Banner,

  argTypes: {
    isHiddenByDefault: ARG_TYPE.OPTIONAL_BOOLEAN,
    level: ARG_TYPE.OPTIONAL_LEVEL,
    isCollapsible: ARG_TYPE.OPTIONAL_BOOLEAN,
    isClosable: ARG_TYPE.OPTIONAL_BOOLEAN,
    isFixed: ARG_TYPE.OPTIONAL_BOOLEAN,
    top: {
      control: 'text'
    },
    closingDelay: {
      control: 'number'
    },
    withAutomaticClosing: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    isHiddenByDefault: false,
    isCollapsible: true,
    isClosable: false,
    isFixed: false,
    level: Level.SUCCESS,
    children: 'This is the content of the banner',
    top: '60px',
    withAutomaticClosing: false
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: props => (
    <Box>
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
    </Box>
  )
}

export const AutoCollapsing: Story = {
  args: {
    closingDelay: 5000,
    isCollapsible: true,
    level: Level.SUCCESS,
    onAutoClose: fn(),
    onClose: fn(),
    top: '60px',
    withAutomaticClosing: true
  },
  render: props => (
    <Box>
      <div
        style={{
          backgroundColor: THEME.color.charcoal,
          height: '60px',
          width: '100%'
        }}
      >
        <h2 style={{ color: THEME.color.white }}>Another header</h2>
      </div>
      <Banner {...props}>Collapses automatically in 5 seconds</Banner>
    </Box>
  )
}

export const AutoClosing: Story = {
  args: {
    closingDelay: 3000,
    isClosable: true,
    level: Level.SUCCESS,
    onAutoClose: fn(),
    onClose: fn(),
    top: '60px',
    withAutomaticClosing: true
  },
  render: props => (
    <Box>
      <div
        style={{
          backgroundColor: THEME.color.charcoal,
          height: '60px',
          width: '100%'
        }}
      >
        <h2 style={{ color: THEME.color.white }}>Again a header</h2>
      </div>
      <Banner {...props}>Closes automatically in 3 seconds</Banner>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
`
