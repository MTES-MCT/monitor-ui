import { useKey } from '@hooks/useKey'
import classnames from 'classnames'
import { useCallback, useMemo, type CSSProperties } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { getChoiceFieldBackgroundColorFactoryForState, getChoiceFieldBorderColorFactoryForState } from './shared/utils'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'

import type { CommonChoiceFieldStyleProps } from './shared/types'
import type { CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Checkbox'
import type { Promisable } from 'type-fest'

export type CheckboxProps = Omit<RsuiteCheckboxProps, 'as' | 'checked' | 'defaultChecked' | 'id' | 'onChange'> & {
  checked?: boolean | undefined
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  /**
   * Used internally to pass the error state from other monitor-ui components using this checkbox.
   *
   * @description
   * ⚠️ Don't use this prop directly. Use `error` instead.
   *
   * @internal
   */
  hasError?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  isLight?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (isChecked: boolean | undefined) => Promisable<void>
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
}
export function Checkbox({
  checked = false,
  className,
  disabled = false,
  error,
  hasError = false,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  indeterminate = false,
  isErrorMessageHidden = false,
  isLight = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  readOnly = false,
  style,
  ...originalProps
}: CheckboxProps) {
  const controlledClassName = useMemo(() => classnames('Field-Checkbox', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasControlledError = useMemo(() => hasError || Boolean(controlledError), [controlledError, hasError])
  const key = useKey([disabled, name])

  const handleChange = useCallback(
    (_nextValue: ValueType | undefined, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      onChange(isChecked)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, onChange)

  return (
    <Field className={controlledClassName} style={style}>
      <StyledRsuiteCheckbox
        key={key}
        $hasError={hasControlledError}
        $isChecked={checked || indeterminate}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        checked={checked}
        disabled={disabled}
        id={name}
        indeterminate={indeterminate}
        name={name}
        onChange={handleChange}
        readOnly={readOnly}
        {...originalProps}
      >
        {label}
      </StyledRsuiteCheckbox>

      {!isErrorMessageHidden && hasControlledError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

export const StyledRsuiteCheckbox = styled(RsuiteCheckbox)<CommonChoiceFieldStyleProps>`
  * {
    ${p => p.$isReadOnly && `cursor: default !important;`}
    user-select: none;
  }

  > .rs-checkbox-checker,
  &.rs-checkbox-indeterminate > .rs-checkbox-checker {
    min-height: unset;
    padding: 0 0 0 24px;

    > label {
      /* TODO Check that with Adeline. */
      color: ${p =>
        // eslint-disable-next-line no-nested-ternary
        p.$isDisabled || p.$isReadOnly ? p.theme.color.lightGray : p.theme.color.gunMetal};
      font-size: 13px;
      font-weight: 500;
      line-height: 1;
      transition: color 0.2s linear;

      > .rs-checkbox-wrapper {
        left: 0;
        top: 2px;

        &:before {
          /* Remove focus ring */
          border: 0;
          opacity: 1;
        }

        > .rs-checkbox-inner {
          &:before {
            background-color: ${getChoiceFieldBackgroundColorFactoryForState('default')};
            border: 2px solid ${getChoiceFieldBorderColorFactoryForState('default')} !important;
            border-radius: 0;
            opacity: 1;
          }

          /* Checkmark */
          &:after {
            border-color: ${p => (p.$isReadOnly || p.$isTransparent ? p.theme.color.charcoal : p.theme.color.cultured)};
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

        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${getChoiceFieldBackgroundColorFactoryForState('hover')};
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

        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${getChoiceFieldBackgroundColorFactoryForState('focus')};
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

        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${getChoiceFieldBackgroundColorFactoryForState('active')};
              border: solid 2px ${getChoiceFieldBorderColorFactoryForState('active')} !important;
            }
          }
        }
      }
    }
  }
`
