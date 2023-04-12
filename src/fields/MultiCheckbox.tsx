import { useCallback, useMemo } from 'react'
import { Checkbox, CheckboxGroup as RsuiteCheckboxGroup } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps<OptionValue extends OptionValueType = any> = {
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
  value?: OptionValue[] | undefined
}
export function MultiCheckbox<OptionValue extends OptionValueType>({
  value = [],
  disabled = false,
  isErrorMessageHidden = false,
  error,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  label,
  name,
  onChange,
  options
}: MultiCheckboxProps<OptionValue>) {
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = Boolean(controlledError)

  const handleChange = useCallback(
    (nextOptionValue: OptionValue) => {
      if (onChange) {
        onChange(nextOptionValue as any)
      }
    },
    [onChange]
  )

  return (
    <Fieldset
      className="Field-MultiCheckbox"
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
    >
      <CheckboxGroup $hasError={hasError} $isInline={isInline} name={name} onChange={handleChange as any} value={value}>
        {options.map(option => (
          <Checkbox key={JSON.stringify(option.value)} value={option.value as any}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const CheckboxGroup = styled(RsuiteCheckboxGroup)<{
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
