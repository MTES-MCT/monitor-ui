import { Size } from '@constants'
import styled from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './utils'

import type { CommonFieldStyleProps } from './types'

type StyledInputBoxProps = CommonFieldStyleProps & {
  $hasIcon: boolean
  $size: Size
}

const PADDING: Record<Size, string> = {
  [Size.LARGE]: '8px 16px 12px',
  [Size.NORMAL]: '3px 8px 7px',
  [Size.SMALL]: '3px 8px 6px'
}

const PADDING_WITH_ICON: Record<Size, string> = {
  [Size.LARGE]: '8px 48px 11px 16px',
  [Size.NORMAL]: '3px 38px 6px 8px',
  [Size.SMALL]: '3px 38px 6px 8px'
}

export const StyledInputBox = styled.div<StyledInputBoxProps>`
  display: flex;
  position: relative;
  width: 100%;

  > .rs-auto-complete {
    display: flex;
    flex-grow: 1;
  }

  > input,
  > .rs-auto-complete > input {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('default')};
    border-radius: 0;
    color: ${p => p.theme.color.gunMetal};
    ${p => p.$isReadOnly && `cursor: default;`}
    flex-grow: 1;
    font-size: 13px;
    font-weight: 500;
    line-height: 1;
    padding: ${p => (p.$hasIcon ? PADDING_WITH_ICON[p.$size] : PADDING[p.$size])};
    vertical-align: center;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('default')};
    }

    &:hover {
      background-color: ${getFieldBackgroundColorFactory()};
      border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;

      &::placeholder {
        color: ${getFieldPlaceholderColorFactoryForState('hover')};
      }
    }

    &:active,
    &:focus {
      background-color: ${getFieldBackgroundColorFactory()};
      border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;
      outline: 0;

      &::placeholder {
        color: ${getFieldPlaceholderColorFactoryForState('focus')};
      }
    }
  }

  > .Element-IconBox {
    position: absolute;
    right: ${p => (p.$size === Size.LARGE ? '16px' : '8px')};
    top: ${p => (p.$size === Size.LARGE ? '10px' : '5px')};
  }
`
