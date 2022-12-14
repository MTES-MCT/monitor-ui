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
    { label: 'Nemo', value: 'NEMO' },
    { label: 'Doris', value: 'DORIS' }
  ]
}

export default {
  title: 'Elements/AutoComplete',
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
