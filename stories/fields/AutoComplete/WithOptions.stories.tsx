import { useState } from 'react'

import { AutoComplete } from '../../../src'
import { Output } from '../../_components/Output'

import type { AutoCompleteProps } from '../../../src'

const args: AutoCompleteProps = {
  defaultValue: undefined,
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  placeholder: 'Type "first"'
}

export default {
  title: 'Fields/AutoComplete',
  component: AutoComplete,

  argTypes: {
    defaultValue: {
      control: 'text'
    }
  },

  args
}

export function WithOptions(props: AutoCompleteProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <AutoComplete {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
