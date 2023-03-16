import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Textarea } from '../../src'

import type { TextareaProps } from '../../src'

const args: TextareaProps = {
  defaultValue: undefined,
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'A textarea',
  name: 'myTextarea',
  placeholder: 'A textarea placeholder'
}

export default {
  title: 'Fields/Textarea',
  component: Textarea,

  argTypes: {
    defaultValue: {
      control: 'text'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
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
