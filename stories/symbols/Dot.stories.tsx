import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Dot, THEME, type DotProps } from '../../src'

import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DotProps> = {
  title: 'Symbols/Dot',
  component: Dot,

  argTypes: {
    $borderColor: {
      control: {
        type: 'color'
      }
    },
    $backgroundColor: {
      control: {
        type: 'color'
      }
    },
    $size: {
      control: {
        type: 'number'
      }
    }
  },

  decorators: [generateStoryDecorator()]
}

export default meta

export function _Dot() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '13px', gap: '16px' }}>
      <Dot />
      <Dot $backgroundColor={THEME.color.goldenPoppy} $borderColor={THEME.color.blueGray} />

      <DotWithText>
        <Dot $backgroundColor={THEME.color.mediumSeaGreen} $borderColor={THEME.color.mediumSeaGreen} $size={8} /> With
        Text
      </DotWithText>
    </div>
  )
}

const DotWithText = styled.div`
  align-items: baseline;
  display: inline-flex;
  gap: 4px;
`
