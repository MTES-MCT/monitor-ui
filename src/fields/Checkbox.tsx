/* eslint-disable @typescript-eslint/naming-convention */

import { useKey } from '@hooks/useKey'
import classnames from 'classnames'
import { useCallback, useMemo, type CSSProperties } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'

import type { CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Checkbox'
import type { Promisable } from 'type-fest'

export type CheckboxProps = Omit<RsuiteCheckboxProps, 'as' | 'checked' | 'defaultChecked' | 'id' | 'onChange'> & {
  checked?: boolean | undefined
  className?: string | undefined
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
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((isChecked: boolean) => Promisable<void>) | undefined
  style?: CSSProperties | undefined
}
export function Checkbox({
  checked = false,
  className,
  error,
  hasError = false,
  isErrorMessageHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  style,
  ...originalProps
}: CheckboxProps) {
  const controlledClassName = useMemo(() => classnames('Field-Checkbox', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasControlledError = useMemo(() => hasError || Boolean(controlledError), [controlledError, hasError])
  const key = useKey([originalProps.disabled, originalProps.name])

  const handleChange = useCallback(
    (_nextValue: ValueType | undefined, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      onChange(isChecked)
    },
    [onChange]
  )

  const commonProps = {
    ...originalProps,
    $isLight: isLight,
    checked,
    id: originalProps.name,
    key,
    onChange: handleChange
  }

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className={controlledClassName} style={style}>
      {(() => {
        if (originalProps.disabled) {
          return <StyledCheckboxWhenDisabled {...commonProps}>{label}</StyledCheckboxWhenDisabled>
        }

        if (originalProps.readOnly) {
          return <StyledCheckboxWhenReadOnly {...commonProps}>{label}</StyledCheckboxWhenReadOnly>
        }

        return (
          <StyledCheckbox $hasError={hasControlledError} {...commonProps}>
            {label}
          </StyledCheckbox>
        )
      })()}

      {!isErrorMessageHidden && hasControlledError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCheckboxBase = styled(RsuiteCheckbox)<{
  $isLight: boolean
}>`
  * {
    user-select: none;
  }

  > .rs-checkbox-checker {
    min-height: unset;
    padding: 0 0 0 24px;

    > label {
      font-size: 13px;
      font-weight: 500;
      line-height: 1;
      transition: color 0.2s linear;

      > .rs-checkbox-wrapper {
        left: 0;
        top: 2px;

        > .rs-checkbox-inner {
          &:before {
            border-radius: 0;
          }

          &:after {
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
`

const StyledCheckbox = styled(StyledCheckboxBase)<{
  $hasError: boolean
}>`
  > .rs-checkbox-checker {
    > label {
      > .rs-checkbox-wrapper {
        > .rs-checkbox-inner {
          &:before {
            background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
            border: solid 2px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)};
          }
        }
      }
    }

    &:hover,
    &:focus {
      > label {
        color: ${p => p.theme.color.blueYonder};

        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${p => p.theme.color.blueYonder25};
              border: solid 2px ${p => p.theme.color.blueYonder};
            }
          }
        }
      }
    }

    &:active {
      > label {
        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${p => p.theme.color.blueGray};
              border: solid 2px ${p => p.theme.color.blueGray};
            }
          }
        }
      }
    }
  }

  &.rs-checkbox-checked {
    > .rs-checkbox-checker {
      > label {
        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:before {
              background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
              border: solid 2px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
            }
          }
        }
      }

      &:hover,
      &:focus {
        > label {
          color: ${p => p.theme.color.blueYonder};

          > .rs-checkbox-wrapper {
            > .rs-checkbox-inner {
              &:before {
                background-color: ${p => p.theme.color.blueYonder};
                border: solid 2px ${p => p.theme.color.blueYonder};
              }
            }
          }
        }
      }

      &:active {
        > label {
          > .rs-checkbox-wrapper {
            > .rs-checkbox-inner {
              &:before {
                background-color: ${p => p.theme.color.blueGray};
                border: solid 2px ${p => p.theme.color.blueGray};
              }
            }
          }
        }
      }
    }
  }
`

const StyledCheckboxWhenDisabled = styled(StyledCheckboxBase)`
  > .rs-checkbox-checker {
    > label {
      color: ${p => p.theme.color.lightGray};

      > .rs-checkbox-wrapper {
        > .rs-checkbox-inner {
          &:before {
            background-color: transparent !important;
            border: solid 2px ${p => p.theme.color.lightGray} !important;
          }
        }
      }
    }
  }

  &.rs-checkbox-checked {
    > .rs-checkbox-checker {
      > label {
        > .rs-checkbox-wrapper {
          &:before {
            opacity: 1;
          }

          > .rs-checkbox-inner {
            &:before {
              background-color: ${p => p.theme.color.lightGray} !important;
              border: solid 2px ${p => p.theme.color.lightGray} !important;
            }
          }
        }
      }
    }
  }
`

const StyledCheckboxWhenReadOnly = styled(StyledCheckboxBase)`
  > .rs-checkbox-checker {
    > label {
      > .rs-checkbox-wrapper {
        > .rs-checkbox-inner {
          &:before {
            background-color: transparent;
            border: solid 2px ${p => p.theme.color.lightGray};
          }
        }
      }
    }
  }

  &.rs-checkbox-checked {
    > .rs-checkbox-checker {
      > label {
        > .rs-checkbox-wrapper {
          > .rs-checkbox-inner {
            &:after {
              border-color: ${p => p.theme.color.charcoal};
            }
          }
        }
      }
    }
  }
`
