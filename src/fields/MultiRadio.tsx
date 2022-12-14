import { useCallback, useEffect, useMemo, useState } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { Fieldset } from '../elements/Fieldset'
import { Legend } from '../elements/Legend'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps = {
  defaultValue?: string
  isInline?: boolean
  isLabelHidden?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  options: Option[]
}
export function MultiRadio({
  defaultValue,
  isInline = false,
  isLabelHidden = false,
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

  // TODO There may be a better solution.
  // A key change is not enough to force radio checked check changes
  // on `defaultValue` property update (even when appending `defaultValue` to `key`),
  // we need to force a second re-render in order for the changes to be applied.
  useEffect(() => {
    setCheckedOptionValue(defaultValue)
  }, [defaultValue])

  return (
    <Fieldset key={key}>
      <Legend isHidden={isLabelHidden}>{label}</Legend>

      <ChecboxesBox $isInline={isInline}>
        {options.map((option, index) => (
          <Radio
            // eslint-disable-next-line react/no-array-index-key
            key={`${name}-${index}`}
            defaultChecked={option.value === checkedOptionValue}
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
      padding: 2px 0 0 28px;

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
        margin-left: 0.75rem;
      }
    `}
`
