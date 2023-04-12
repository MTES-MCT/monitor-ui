import { useEffect, useState } from 'react'

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
  const [outputValue, setOutputValue] = useState<string | undefined>(props.value)

  useEffect(() => {
    setOutputValue(props.value)
  }, [props.value])

  return (
    <>
      <TextInput {...props} onChange={setOutputValue} value={outputValue} />

      <Output value={outputValue} />
    </>
  )
}
