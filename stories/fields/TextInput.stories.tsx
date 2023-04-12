import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { TextInput } from '../../src'

import type { TextInputProps } from '../../src'

const args: TextInputProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A text input',
  name: 'myTextInput',
  placeholder: 'A text input placeholder',
  value: undefined
}

export default {
  title: 'Fields/TextInput',
  component: TextInput,

  argTypes: {
    value: {
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

export function _TextInput(props: TextInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <TextInput {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
