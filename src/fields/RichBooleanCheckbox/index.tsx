import { useCallback, useMemo } from 'react'

import { getRichBooleanFromRichBooleanOptionValues, getRichBooleanOptionValuesFromRichBoolean } from './utils'
import { RichBoolean } from '../../constants'
import { MultiCheckbox, type MultiCheckboxProps } from '../MultiCheckbox'

import type { RichBooleanOption, RichBooleanOptionValue } from './types'
import type { Promisable } from 'type-fest'

export type RichBooleanCheckboxProps = Omit<
  MultiCheckboxProps<RichBoolean.FALSE | RichBoolean.TRUE>,
  'onChange' | 'options' | 'value'
> & {
  falseOptionLabel: string
  onChange?: (nextValue: RichBoolean | undefined) => Promisable<void>
  trueOptionLabel: string
  value?: RichBoolean | undefined
}
export function RichBooleanCheckbox({
  falseOptionLabel,
  onChange,
  trueOptionLabel,
  value,
  ...originalPropp
}: RichBooleanCheckboxProps) {
  const controlledValue = getRichBooleanOptionValuesFromRichBoolean(value)

  const options: RichBooleanOption[] = useMemo(
    () => [
      { label: trueOptionLabel, value: RichBoolean.TRUE },
      { label: falseOptionLabel, value: RichBoolean.FALSE }
    ],
    [trueOptionLabel, falseOptionLabel]
  )

  const handleChange = useCallback(
    (nextOptionValues: RichBooleanOptionValue[] | undefined) => {
      if (!onChange) {
        return
      }

      const nextValueAsRichBoolean = getRichBooleanFromRichBooleanOptionValues(nextOptionValues)

      onChange(nextValueAsRichBoolean)
    },
    [onChange]
  )

  return <MultiCheckbox onChange={handleChange} options={options} value={controlledValue} {...originalPropp} />
}
