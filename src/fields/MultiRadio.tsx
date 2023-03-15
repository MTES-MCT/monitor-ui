import { equals } from 'ramda'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue = string> = {
  defaultValue?: OptionValue | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
}
export function MultiRadio<OptionValue = string>({
  defaultValue,
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
}: MultiRadioProps<OptionValue>) {
  const [controlledDefaultValue, setControlledDefaultValue] = useState<OptionValue | undefined>(undefined)

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultValue, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      const nextCheckedOptionValue = isChecked ? nextOptionValue : undefined

      setControlledDefaultValue(nextCheckedOptionValue)

      if (onChange) {
        onChange(nextCheckedOptionValue)
      }
    },
    [onChange]
  )

  useFieldUndefineEffect(disabled, onChange)

  // TODO There may be a better solution. Replace the map with a rendering memo?
  // A key change is not enough to force radio checked check changes
  // on `defaultValue` property update (even when appending `defaultValue` to `key`),
  // we need to force a second re-render in order for the changes to be applied.
  useEffect(() => {
    const nextControlledDefaultValue = !disabled ? defaultValue : undefined

    setControlledDefaultValue(nextControlledDefaultValue)
  }, [defaultValue, disabled])

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
        {options.map((option, index) => (
          <Radio
            // eslint-disable-next-line react/no-array-index-key
            key={`${key}-${index}`}
            defaultChecked={equals(option.value, controlledDefaultValue)}
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
