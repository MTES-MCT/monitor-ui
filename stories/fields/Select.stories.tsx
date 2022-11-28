import { useState } from 'react'

import { Select } from '../../src'
import { Output } from '../_components/Output'

import type { SelectProps } from '../../src'

const args: SelectProps = {
  defaultValue: 'FIRST_OPTION',
  isMulti: false,
  placeholder: 'Pick an option',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' }
  ]
}

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {},

  args
}

export const _Select = (props: SelectProps) => {
  const [outputValue, setOutputValue] = useState<string | string[] | undefined>('∅')

  return (
    <>
      <Select {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
