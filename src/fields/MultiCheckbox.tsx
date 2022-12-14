import { equals, reject } from 'ramda'
import { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Fieldset } from '../elements/Fieldset'
import { Legend } from '../elements/Legend'
import { Checkbox } from './Checkbox'

import type { Option } from '../types'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps = {
  defaultValue?: string[]
  isInline?: boolean
  isLabelHidden?: boolean
  label: string
  name: string
  onChange?: (nextValue: string[] | undefined) => Promisable<void>
  options: Option[]
}
export function MultiCheckbox({
  defaultValue = [],
  isInline = false,
  isLabelHidden = false,
  label,
  name,
  onChange,
  options
}: MultiCheckboxProps) {
  const checkedOptionValues = useRef<string[]>(defaultValue)

  const key = useMemo(() => `${name}-${JSON.stringify(defaultValue)}`, [defaultValue, name])

  const handleChange = useCallback(
    (nextOptionValue: string, isChecked: boolean) => {
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

  return (
    <Fieldset key={key}>
      <Legend isHidden={isLabelHidden}>{label}</Legend>

      <ChecboxesBox $isInline={isInline}>
        {options.map((option, index) => (
          <Checkbox
            // eslint-disable-next-line react/no-array-index-key
            key={`${name}-${index}`}
            defaultChecked={defaultValue.includes(option.value)}
            label={option.label}
            name={`${name}${index}`}
            onChange={(isChecked: boolean) => handleChange(option.value, isChecked)}
          />
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

  ${p =>
    !p.$isInline &&
    css`
      > .rs-checkbox:not(:first-child) {
        margin-top: 8px;
      }
    `}

  ${p =>
    p.$isInline &&
    css`
      > .rs-checkbox:not(:first-child) {
        margin-left: 12px;
      }
    `}
`
