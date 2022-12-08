import { useState } from 'react'

import { Select } from '../../src'
import { Output } from '../_components/Output'

import type { SelectProps } from '../../src'

const args: SelectProps = {
  defaultValue: undefined,
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  placeholder: 'Pick an option',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {
    defaultValue: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  args
}

export function _Select(props: SelectProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <Select {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
