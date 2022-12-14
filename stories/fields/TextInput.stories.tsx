import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { TextInput } from '../../src'

import type { TextInputProps } from '../../src'

const args: TextInputProps = {
  defaultValue: undefined,
  isLabelHidden: false,
  isLight: false,
  name: 'myTextInput',
  label: 'A text input'
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
