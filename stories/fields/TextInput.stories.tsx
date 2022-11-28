import { useState } from 'react'

import { TextInput } from '../../src'
import { Output } from '../_components/Output'

import type { TextInputProps } from '../../src'

const args: TextInputProps = {
  defaultValue: undefined,
  name: 'myTextInput'
}

export default {
  title: 'Fields/TextInput',
  component: TextInput,

  argTypes: {
    defaultValue: {
      control: 'text'
    },
    isMulti: {
      control: 'boolean'
    }
  },

  args
}

export function _TextInput(props: TextInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <TextInput {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
