import { useCallback, useEffect, useMemo, useState } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps = {
  defaultValue?: string | undefined
  disabled?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string | undefined) => Promisable<void>) | undefined
  options: Option[]
}
export function MultiRadio({
  defaultValue,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  label,
  name,
  onChange,
  options
}: MultiRadioProps) {
  const [checkedOptionValue, setCheckedOptionValue] = useState<string | undefined>(undefined)

  const key = useMemo(() => `${name}-${String(checkedOptionValue)}}`, [checkedOptionValue, name])

  const handleChange = useCallback(
    (nextOptionValue: string, isChecked: boolean) => {
      const nextCheckedOptionValue = isChecked ? nextOptionValue : undefined

      setCheckedOptionValue(nextCheckedOptionValue)

      if (onChange) {
        onChange(nextCheckedOptionValue)
      }
    },
    [onChange]
  )

  useFieldUndefineEffect(disabled, onChange)

  // TODO There may be a better solution.
  // A key change is not enough to force radio checked check changes
  // on `defaultValue` property update (even when appending `defaultValue` to `key`),
  // we need to force a second re-render in order for the changes to be applied.
  useEffect(() => {
    setCheckedOptionValue(defaultValue)
  }, [defaultValue])

  return (
    <Fieldset key={key} isHidden={isLabelHidden} isLight={isLight} legend={label}>
      <ChecboxesBox $isInline={isInline}>
        {options.map((option, index) => (
          <Radio
            // eslint-disable-next-line react/no-array-index-key
            key={`${name}-${index}`}
            defaultChecked={option.value === checkedOptionValue}
            disabled={disabled}
            name={name}
            onChange={(_: any, isChecked: boolean) => handleChange(option.value, isChecked)}
          >
            {option.label}
          </Radio>
        ))}
      </ChecboxesBox>
    </Fieldset>
  )
}

const ChecboxesBox = styled.div<{
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
