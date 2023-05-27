/* eslint-disable @typescript-eslint/naming-convention */

import { useCallback, useMemo } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { getPseudoRandomString } from '../utils/getPseudoRandomString'
import { normalizeString } from '../utils/normalizeString'

import type { CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Checkbox'
import type { Promisable } from 'type-fest'

export type CheckboxProps = Omit<RsuiteCheckboxProps, 'as' | 'checked' | 'defaultChecked' | 'id' | 'onChange'> & {
  checked?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((isCheched: boolean) => Promisable<void>) | undefined
}
export function Checkbox({
  checked = false,
  error,
  isErrorMessageHidden = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  ...originalProps
}: CheckboxProps) {
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = getPseudoRandomString()

  const handleChange = useCallback(
    (_: ValueType | undefined, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      onChange(isChecked)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className="Field-Checkbox">
      <StyledCheckbox key={key} checked={checked} id={originalProps.name} onChange={handleChange} {...originalProps}>
        {label}
      </StyledCheckbox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCheckbox = styled(RsuiteCheckbox)`
  > .rs-checkbox-checker {
    min-height: 0;
    padding-left: 28px;
    padding-top: 0;

    * {
      user-select: none;
    }

    .rs-checkbox-wrapper {
      left: 2px;
      top: 2px !important;

      :before {
        border-radius: 0;
      }

      > .rs-checkbox-inner {
        :before {
          border-radius: 0;
        }
      }
    }
  }
`
