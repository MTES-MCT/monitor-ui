import { useState } from 'react'

import { Textarea } from '../../src'
import { Output } from '../_components/Output'

import type { TextareaProps } from '../../src'

const args: TextareaProps = {
  defaultValue: undefined,
  name: 'myTextarea'
}

export default {
  title: 'Fields/Textarea',
  component: Textarea,

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

export function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <Textarea {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
