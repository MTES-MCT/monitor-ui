import { isEqual } from 'lodash'
import { equals } from 'ramda'
import { useCallback, useMemo, useState } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { usePrevious } from '../hooks/usePrevious'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends number | string | Record<string, any> = string> = {
  disabled?: boolean | undefined
  error?: string | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
  value?: OptionValue | undefined
}
export function MultiRadio<OptionValue extends number | string | Record<string, any> = string>({
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
  options,
  value
}: MultiRadioProps<OptionValue>) {
  // This tracks the component internal value which allows us to react to value changes after a radio toggling
  const [internalValue, setInternalValue] = useState<OptionValue | undefined>(value)

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
  const key = useKey([controlledValue, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValue = isChecked ? nextOptionValue : undefined

      setInternalValue(nextCheckedOptionValue)

      if (onChange) {
        onChange(nextCheckedOptionValue)
      }
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset
      key={key}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
    >
      <CheckboxesBox $isInline={isInline}>
        {options.map(option => (
          <Radio
            key={JSON.stringify(option.value)}
            checked={equals(option.value, controlledValue)}
            disabled={disabled}
            name={name}
            onChange={(_: any, isChecked: boolean) => handleChange(option.value, isChecked)}
          >
            {option.label}
          </Radio>
        ))}
      </CheckboxesBox>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const CheckboxesBox = styled.div<{
  $isInline: boolean
}>`
  color: ${p => p.theme.color.gunMetal};
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};
  font-weight: 500;

  > .rs-radio {
    * {
      user-select: none;
    }

    > .rs-radio-checker {
      min-height: 0;
      padding: 0 0 0 28px;
      user-select: none;

      .rs-radio-wrapper {
        left: 2px;
        top: 3px !important;
      }
    }
  }

  ${p =>
    !p.$isInline &&
    css`
      > .rs-radio:not(:first-child) {
        margin-top: 6px;
      }
    `}

  ${p =>
    p.$isInline &&
    css`
      > .rs-radio:not(:first-child) {
        margin-left: 12px;
      }
    `}
`
