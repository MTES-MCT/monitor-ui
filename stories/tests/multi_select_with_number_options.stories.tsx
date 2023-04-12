import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { MultiSelect } from '../../src'

import type { MultiSelectProps } from '../../src'

const args: MultiSelectProps<number> = {
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: 0 },
    { label: 'Second Option', value: 1 },
    { label: 'Third Option', value: 2 }
  ],
  placeholder: 'Pick an option',
  searchable: false,
  value: undefined
}

export default {
  title: 'Tests/MultiSelect with number options',
  component: MultiSelect,

  parameters: {
    options: {
      showPanel: false
    }
  },

  args
}

export function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<any>(undefined)

  return (
    <>
      <MultiSelect {...props} onChange={setOutputValue} value={outputValue} />

      <Output value={outputValue} />
    </>
  )
}
