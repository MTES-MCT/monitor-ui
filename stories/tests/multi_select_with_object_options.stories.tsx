import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { MultiSelect } from '../../src'

import type { MultiSelectProps } from '../../src'

const args: MultiSelectProps<{
  id: number
  name: string
}> = {
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: { id: 0, name: 'First Option Name' } },
    { label: 'Second Option', value: { id: 1, name: 'Second Option Name' } },
    { label: 'Third Option', value: { id: 2, name: 'Third Option Name' } }
  ],
  optionValueKey: 'name',
  placeholder: 'Pick an option',
  searchable: false,
  value: undefined
}

export default {
  title: 'Tests/MultiSelect with object options',
  component: MultiSelect,

  parameters: {
    options: {
      showPanel: false
    }
  },

  args
}

export function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  return (
    <>
      <MultiSelect {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
