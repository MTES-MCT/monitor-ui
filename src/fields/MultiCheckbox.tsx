import { equals, reject } from 'ramda'
import { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'
import { Checkbox } from './Checkbox'

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
  const key = useMemo(() => `${name}-${JSON.stringify(defaultValue)}`, [defaultValue, name])

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

  useFieldUndefineEffect(disabled, onChange)

  const checkboxesElement = useMemo(
    () => (
      <>
        {options.map((option, index) => (
          <Checkbox
            key={String(option.value)}
            defaultChecked={defaultValue.includes(option.value)}
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
    <Fieldset key={key} isHidden={isLabelHidden} isLight={isLight} legend={label}>
      <ChecboxesBox $isInline={isInline}>{checkboxesElement}</ChecboxesBox>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const ChecboxesBox = styled.div<{
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
