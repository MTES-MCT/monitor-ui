import { equals } from 'ramda'
import { useCallback, useMemo } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldControl } from '../hooks/useFieldControl'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends OptionValueType = string> = {
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
export function MultiRadio<OptionValue extends OptionValueType = string>({
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
  const { controlledOnChange, controlledValue } = useFieldControl(value, onChange, {
    disabled,
    isUndefinedWhenDisabled
  })

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name, value])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValue = isChecked ? nextOptionValue : undefined

      controlledOnChange(nextCheckedOptionValue)
    },
    [controlledOnChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset
      key={key}
      className="Field-MultiRadio"
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
