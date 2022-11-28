import { useState } from 'react'

import { Checkbox } from '../../src'
import { Output } from '../_components/Output'

import type { CheckboxProps } from '../../src'

export default {
  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {},

  args: {
    defaultChecked: false,
    label: 'Check me',
    name: 'myCheckbox'
  } as CheckboxProps
}

export const _Checkbox = (props: CheckboxProps) => {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅')

  return (
    <>
      <Checkbox {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
