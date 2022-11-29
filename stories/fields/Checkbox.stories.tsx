import { useState } from 'react'

import { Checkbox } from '../../src'
import { Output } from '../_components/Output'

import type { CheckboxProps } from '../../src'

const args: CheckboxProps = {
  defaultChecked: false,
  label: 'Check me',
  name: 'myCheckbox'
}

export default {
  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {},

  args
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
