import { isEqual } from 'lodash'
import { equals, includes, reject } from 'ramda'
import { useCallback, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'

import { Checkbox } from './Checkbox'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { usePrevious } from '../hooks/usePrevious'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps<OptionValue extends number | string | Record<string, any> = string> = {
  disabled?: boolean | undefined
  error?: string | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
  value?: OptionValue[] | undefined
}
export function MultiCheckbox<OptionValue extends number | string | Record<string, any> = string>({
  value = [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  error,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options
}: MultiCheckboxProps<OptionValue>) {
  // This tracks the component internal value which allows us to react to value changes after each checkbox toggling
  const [internalValue, setInternalValue] = useState<OptionValue[] | undefined>(value)

  // and compare it with an eventual external value change (via the `value` prop)
  const previousValue = usePrevious(value)

  // to decide which on is the source of "truth" in `controlledValue` (the last one to be changed is the true value)
  const controlledValue = useMemo(() => {
    // If the `value` has changed, `value` takes precedence,
    // otherwise we can use our current internal value
    const nextControlledValue = isEqual(value, previousValue) ? internalValue : value

    return !isUndefinedWhenDisabled || !disabled ? nextControlledValue : undefined
  }, [disabled, internalValue, isUndefinedWhenDisabled, previousValue, value])

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValues = isChecked
        ? [...(controlledValue || []), nextOptionValue]
        : reject(equals(nextOptionValue))(controlledValue || [])

      const normalizedNextValue = nextCheckedOptionValues.length ? nextCheckedOptionValues : undefined

      setInternalValue(normalizedNextValue)

      if (onChange) {
        onChange(normalizedNextValue)
      }
    },
    [controlledValue, onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset disabled={disabled} hasError={hasError} isLegendHidden={isLabelHidden} isLight={isLight} legend={label}>
      <ChecboxesBox $hasError={hasError} $isInline={isInline}>
        {options.map((option, index) => (
          <Checkbox
            key={JSON.stringify(option.value)}
            checked={includes(option.value, controlledValue || [])}
            disabled={disabled}
            label={option.label}
            name={`${name}${index}`}
            onChange={(isChecked: boolean) => handleChange(option.value, isChecked)}
          />
        ))}
      </ChecboxesBox>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const ChecboxesBox = styled.div<{
  $hasError: boolean
  $isInline: boolean
}>`
  color: ${p => p.theme.color.gunMetal};
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};

  > div {
    > .rs-checkbox {
      user-select: none;
    }
  }
  ${p =>
    p.$hasError &&
    css`
      .rs-checkbox-wrapper .rs-checkbox-inner::before {
        border-color: ${p.theme.color.maximumRed} !important;
      }
    `}

  ${p =>
    !p.$isInline &&
    css`
      > div:not(:first-child) {
        > .rs-checkbox {
          margin-top: 8px;
        }
      }
    `}

  ${p =>
    p.$isInline &&
    css`
      > div:not(:first-child) {
        .rs-checkbox {
          margin-left: 12px;
        }
      }
    `}
`
