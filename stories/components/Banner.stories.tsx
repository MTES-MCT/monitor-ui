import { useState } from 'react'
import styled from 'styled-components'

import { Output } from '../../.storybook/components/Output'
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

export function _Banner(props: BannerProps) {
  const [hasSecondBannerAutoClosed, setHasSecondBannerAutoClosed] = useState<boolean>(false)
  const [hasSecondBannerClosed, setHasSecondBannerClosed] = useState<boolean>(false)
  const [hasThirdBannerAutoClosed, setHasThirdBannerAutoClosed] = useState<boolean>(false)
  const [hasThirdBannerClosed, setHasThirdBannerClosed] = useState<boolean>(false)

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
        <Banner
          closingDelay={5000}
          isCollapsible
          level={Level.SUCCESS}
          onAutoClose={() => setHasSecondBannerAutoClosed(true)}
          onClose={() => setHasSecondBannerClosed(true)}
          top="60px"
          withAutomaticClosing
        >
          Collapses automatically in 5 seconds
        </Banner>

        <Output
          style={{
            marginTop: '64px'
          }}
          value={{
            hasSecondBannerAutoClosed,
            hasSecondBannerClosed
          }}
        />
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
        <Banner
          closingDelay={3000}
          isClosable
          level={Level.SUCCESS}
          onAutoClose={() => setHasThirdBannerAutoClosed(true)}
          onClose={() => setHasThirdBannerClosed(true)}
          top="60px"
          withAutomaticClosing
        >
          Closes automatically in 3 seconds
        </Banner>

        <Output
          style={{
            marginTop: '64px'
          }}
          value={{
            hasThirdBannerAutoClosed,
            hasThirdBannerClosed
          }}
        />
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`
