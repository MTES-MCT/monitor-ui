import { equals, includes, reject } from 'ramda'
import { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Checkbox } from './Checkbox'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps<OptionValue = string> = {
  defaultValue?: OptionValue[] | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
}
export function MultiCheckbox<OptionValue = string>({
  defaultValue = [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  error,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  label,
  name,
  onChange,
  options
}: MultiCheckboxProps<OptionValue>) {
  const checkedOptionValues = useRef<OptionValue[]>(defaultValue)

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([defaultValue, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValues = isChecked
        ? [...checkedOptionValues.current, nextOptionValue]
        : reject(equals(nextOptionValue))(checkedOptionValues.current)

      checkedOptionValues.current = nextCheckedOptionValues

      if (onChange) {
        const normalizedNextValue = nextCheckedOptionValues.length ? nextCheckedOptionValues : undefined

        onChange(normalizedNextValue)
      }
    },
    [onChange]
  )

  const checkboxesElement = useMemo(
    () => (
      <>
        {options.map((option, index) => (
          <Checkbox
            key={String(option.value)}
            defaultChecked={includes(option.value, defaultValue || [])}
            disabled={disabled}
            label={option.label}
            name={`${name}${index}`}
            onChange={(isChecked: boolean) => handleChange(option.value, isChecked)}
          />
        ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled, handleChange, name, options]
  )

  return (
    <Fieldset
      key={key}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
    >
      <ChecboxesBox $hasError={hasError} $isInline={isInline}>
        {checkboxesElement}
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
