import { equals, includes, reject } from 'ramda'
import { useCallback, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Checkbox } from './Checkbox'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldControl } from '../hooks/useFieldControl'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps<OptionValue extends OptionValueType = string> = {
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
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
export function MultiCheckbox<OptionValue extends OptionValueType = string>({
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options,
  value
}: MultiCheckboxProps<OptionValue>) {
  const { controlledOnChange, controlledValue } = useFieldControl(value, onChange, {
    disabled,
    isUndefinedWhenDisabled
  })

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledValue, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValues = isChecked
        ? [...(controlledValue || []), nextOptionValue]
        : reject(equals(nextOptionValue))(controlledValue || [])

      const normalizedNextValue = nextCheckedOptionValues.length ? nextCheckedOptionValues : undefined

      controlledOnChange(normalizedNextValue)
    },
    [controlledOnChange, controlledValue]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset
      className="Field-MultiCheckbox"
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
    >
      <ChecboxesBox key={key} $hasError={hasError} $isInline={isInline}>
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

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
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
