import styled from 'styled-components'

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
    isClosable: ARG_TYPE.BOOLEAN,
    top: {
      control: {
        type: 'string'
      }
    },
    closingDelay: {
      control: {
        type: 'number'
      }
    },
    withAutomaticClosing: ARG_TYPE.BOOLEAN
  },

  args: {
    isHiddenByDefault: false,
    isCollapsible: true,
    isClosable: false,
    level: Level.SUCCESS,
    children: 'This is the content of the banner',
    top: '60px',
    withAutomaticClosing: false
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Banner(props: BannerProps) {
  return (
    <BannerWrapper>
      <div
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: THEME.color.charcoal,
            height: '60px',
            width: '100%'
          }}
        >
          <h2 style={{ color: THEME.color.white }}>This is a header</h2>
        </div>
        <Banner {...props} className="Banner-Storie" />
      </div>
      <div
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: THEME.color.charcoal,
            height: '60px',
            width: '100%'
          }}
        >
          <h2 style={{ color: THEME.color.white }}>Another header</h2>
        </div>
        <Banner {...props} closingDelay={5000} withAutomaticClosing>
          Closes automatically in 5 seconds
        </Banner>
      </div>
      <div
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: THEME.color.charcoal,
            height: '60px',
            width: '100%'
          }}
        >
          <h2 style={{ color: THEME.color.white }}>Again a header</h2>
        </div>
        <Banner {...props} isClosable isCollapsible={false} withAutomaticClosing>
          Closes automatically in 3 seconds
        </Banner>
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`
