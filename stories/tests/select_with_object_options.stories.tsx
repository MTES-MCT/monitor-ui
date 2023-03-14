import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Select } from '../../src'

import type { SelectProps } from '../../src'

const args: SelectProps<{
  id: number
  name: string
}> = {
  defaultValue: undefined,
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: { id: 0, name: 'First Option Name' } },
    { label: 'Second Option', value: { id: 1, name: 'Second Option Name' } },
    { label: 'Third Option', value: { id: 2, name: 'Third Option Name' } }
  ],
  optionValueKey: 'name',
  placeholder: 'Pick an option',
  searchable: false
}

export default {
  title: 'Tests/Select with object options',
  component: Select,

  parameters: {
    options: {
      showPanel: false
    }
  },

  args
}

export function _Select(props: SelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  return (
    <>
      <Select {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
