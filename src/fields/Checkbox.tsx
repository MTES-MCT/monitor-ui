/* eslint-disable @typescript-eslint/naming-convention */

import { useCallback, useMemo, useState } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { usePrevious } from '../hooks/usePrevious'
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
  const { forceUpdate } = useForceUpdate()

  // This tracks the component internal value which allows us to react to value changes after the checkbox toggling
  const [internalChecked, setInternalChecked] = useState(checked)

  // and compare it with an eventual external value change (via the `value` prop)
  const previousChecked = usePrevious(checked)

  // to decide which on is the source of "truth" in `controlledValue` (the last one to be changed is the true value)
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const controlledChecked = useMemo(() => {
    // If the `value` has changed, `value` takes precedence,
    // otherwise we can use our current internal value
    const nextControlledChecked = checked === previousChecked ? internalChecked : checked

    return !isUndefinedWhenDisabled || !originalProps.disabled ? nextControlledChecked : undefined
  }, [checked, internalChecked, isUndefinedWhenDisabled, originalProps.disabled, previousChecked])

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = getPseudoRandomString()

  const handleChange = useCallback(
    (_: ValueType | undefined, isChecked: boolean) => {
      setInternalChecked(isChecked)

      // We have to force the update since a state with the same value wouldn't re-render
      // which generates conflicting behaviors
      // when `value` prop is changed to a value that is equal to the current internal value
      forceUpdate()

      if (onChange) {
        onChange(isChecked)
      }
    },
    [forceUpdate, onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className="Field-Checkbox">
      <StyledCheckbox
        key={key}
        checked={controlledChecked}
        id={originalProps.name}
        onChange={handleChange}
        {...originalProps}
      >
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
    }
  }
`
