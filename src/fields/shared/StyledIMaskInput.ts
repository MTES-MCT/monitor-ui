import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './utils'

import type { CommonFieldStyleProps } from './types'

export const StyledIMaskInput = styled(IMaskInput)<CommonFieldStyleProps>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  border-radius: 0;
  color: ${p => p.theme.color.gunMetal};
  cursor: default;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  padding: 3px 8px 6px;
  vertical-align: center;
  width: 100%;

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
`
