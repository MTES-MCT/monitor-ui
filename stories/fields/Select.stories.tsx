import { useState } from 'react'

import { Select } from '../../src'
import { Output } from '../_components/Output'

import type { SelectProps } from '../../src'

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {},

  args: {
    isMulti: false,
    options: [
      { label: 'First Option', value: 'FIRST_OPTION' },
      { label: 'Second Option', value: 'SECOND_OPTION' },
      { label: 'Third Option', value: 'THIRD_OPTION' }
    ]
  }
}

export const _Select = (props: SelectProps) => {
  const [outputValue, setOutputValue] = useState<string | string[] | undefined>('')

  return (
    <>
      <Select {...props} onChange={setOutputValue} />

      {outputValue !== '' && <Output value={outputValue} />}
    </>
  )
}
