import { Field } from '@elements/Field'
import { useKey } from '@hooks/useKey'
import classnames from 'classnames'
import { type CSSProperties, useMemo } from 'react'
import { Radio as RsuiteRadio } from 'rsuite'
import styled from 'styled-components'

import {
  getChoiceFieldBackgroundColorFactoryForState,
  getChoiceFieldBorderColorFactoryForState,
  getFieldBackgroundColorFactory
} from './shared/utils'

import type { CommonChoiceFieldStyleProps } from './shared/types'
import type { RadioProps as RsuiteRadioProps } from 'rsuite'

export type RadioProps = Omit<RsuiteRadioProps, 'as' | 'checked' | 'defaultChecked' | 'id'> & {
  checked?: boolean | undefined
  className?: string | undefined
  disabled?: boolean | undefined
  hasError?: boolean | undefined
  isLight?: boolean | undefined
  isTransparent?: boolean | undefined
  labelPosition: 'left' | 'right'
  name: string
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
}

export function Radio({
  checked = false,
  className,
  disabled = false,
  hasError = false,
  isLight = false,
  isTransparent = false,
  labelPosition = 'right',
  name,
  readOnly = false,
  style,
  ...originalProps
}: RadioProps) {
  const controlledClassName = useMemo(() => classnames('Field-Radio', className), [className])
  const key = useKey([disabled, name])

  return (
    <Field className={controlledClassName} style={style}>
      <StyledRsuiteRadio
        key={key}
        $hasError={hasError}
        $isChecked={checked}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        $labelPosition={labelPosition}
        checked={checked}
        disabled={disabled}
        name={name}
        readOnly={readOnly}
        {...originalProps}
      />
    </Field>
  )
}

const StyledRsuiteRadio = styled(RsuiteRadio)<CommonChoiceFieldStyleProps>`
  * {
    ${p => p.$isReadOnly && `cursor: default !important;`}
    user-select: none;
  }

  > .rs-radio-checker {
    min-height: unset;
    padding: 0 0 0 24px;

    > label {
      /* TODO Check that with Adeline. */
      color: ${p =>
        // eslint-disable-next-line no-nested-ternary
        (p.$isDisabled ?? p.$isReadOnly) ? p.theme.color.lightGray : p.theme.color.gunMetal};
      font-size: 13px;
      font-weight: 500;
      line-height: 1;
      transition: color 0.2s linear;

      > .rs-radio-control {
        left: 0;
        top: 2px;

        &:before {
          /* Remove focus ring */
          border: 0;
          opacity: 1;
        }

        > .rs-radio-inner {
          &:before {
            background-color: ${p =>
              p.$isChecked
                ? getFieldBackgroundColorFactory()(p)
                : getChoiceFieldBackgroundColorFactoryForState('default')(p)};
            border: 2px solid ${getChoiceFieldBorderColorFactoryForState('default')} !important;
          }

          /* Dot */

          &:after {
            background-color: ${p =>
              p.$isReadOnly ? p.theme.color.charcoal : getChoiceFieldBorderColorFactoryForState('default')(p)};
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
          }
        }
      }
    }

    &:hover,
    &._hover {
      > label {
        color: ${getChoiceFieldBorderColorFactoryForState('hover')};

        > .rs-radio-control {
          > .rs-radio-inner {
            &:before {
              background-color: ${p =>
                p.$isChecked
                  ? getFieldBackgroundColorFactory()(p)
                  : getChoiceFieldBackgroundColorFactoryForState('hover')(p)};
              border: solid 2px ${getChoiceFieldBorderColorFactoryForState('hover')} !important;
            }
          }
        }
      }
    }

    &:focus,
    &._focus {
      > label {
        color: ${getChoiceFieldBorderColorFactoryForState('focus')};

        > .rs-radio-control {
          > .rs-radio-inner {
            &:before {
              background-color: ${p =>
                p.$isChecked
                  ? getFieldBackgroundColorFactory()(p)
                  : getChoiceFieldBackgroundColorFactoryForState('focus')(p)};
              border: solid 2px ${getChoiceFieldBorderColorFactoryForState('focus')} !important;
            }
          }
        }
      }
    }

    &:active,
    &._active {
      > label {
        color: ${getChoiceFieldBorderColorFactoryForState('active')};

        > .rs-radio-control {
          > .rs-radio-inner {
            &:before {
              background-color: ${p =>
                p.$isChecked
                  ? getFieldBackgroundColorFactory()(p)
                  : getChoiceFieldBackgroundColorFactoryForState('active')(p)};
              border: solid 2px ${getChoiceFieldBorderColorFactoryForState('active')} !important;
            }
          }
        }
      }
    }
  }
`
