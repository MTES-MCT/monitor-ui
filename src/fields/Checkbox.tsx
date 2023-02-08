import { useCallback, useMemo } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
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
export function Checkbox({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  defaultChecked,
  error,
  label,
  onChange,
  ...originalProps
}: CheckboxProps) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const controlledDefaultChecked = useMemo(
    () => (!originalProps.disabled ? defaultChecked : undefined),
    [defaultChecked, originalProps.disabled]
  )
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultChecked, originalProps.disabled, originalProps.name])

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
      <StyledCheckbox
        key={key}
        defaultChecked={controlledDefaultChecked}
        id={originalProps.name}
        onChange={handleChange}
        {...originalProps}
      >
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
