import { useState } from 'react'

import { MultiRadio } from '../../src'
import { Output } from '../_components/Output'

import type { MultiRadioProps } from '../../src'

const args: MultiRadioProps = {
  defaultValue: undefined,
  isInline: false,
  label: 'Pick an option',
  name: 'myMultiRadio',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

export default {
  title: 'Fields/MultiRadio',
  component: MultiRadio,

  argTypes: {
    defaultValue: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  args
}

export function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <MultiRadio {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
