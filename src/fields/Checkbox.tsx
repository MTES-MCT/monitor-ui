import { useCallback, useMemo } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'

import type { CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Checkbox'
import type { Promisable } from 'type-fest'

export type CheckboxProps = Omit<RsuiteCheckboxProps, 'as' | 'checked' | 'id' | 'onChange'> & {
  error?: string | undefined
  label: string
  name: string
  onChange?: ((isCheched: boolean) => Promisable<void>) | undefined
}
export function Checkbox({ error, label, onChange, ...originalProps }: CheckboxProps) {
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useMemo(
    () => `${originalProps.name}-${String(originalProps.defaultChecked)}`,
    [originalProps.defaultChecked, originalProps.name]
  )

  const handleChange = useCallback(
    (_: ValueType | undefined, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      onChange(isChecked)
    },
    [onChange]
  )

  useFieldUndefineEffect(originalProps.disabled, onChange)

  return (
    <Field>
      <StyledCheckbox key={key} id={originalProps.name} onChange={handleChange} {...originalProps}>
        {label}
      </StyledCheckbox>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCheckbox = styled(RsuiteCheckbox)`
  > .rs-checkbox-checker {
    min-height: 0;
    padding-left: 28px;
    padding-top: 0;

    .rs-checkbox-wrapper {
      left: 2px;
      top: 2px !important;
    }
  }
`
