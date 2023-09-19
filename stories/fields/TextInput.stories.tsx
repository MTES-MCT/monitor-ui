import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Icon, Size, TextInput, useFieldControl } from '../../src'

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
    size: {
      control: 'inline-radio',
      options: Size
    },
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

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue, '')

  return (
    <>
      <TextInput {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}

      <Showcase>
        <TextInput
          Icon={Icon.Search}
          label="A text input with an icon"
          name="myTextInputWithAnIcon"
          placeholder="A text input placeholder"
          size={Size.LARGE}
        />

        <div style={{ marginTop: '32px' }}>
          <TextInput
            label="A text input with plaintext prop"
            name="myTextInputWithPlaintextProp"
            placeholder="A text input placeholder"
            plaintext
            size={Size.LARGE}
            value="Plain text value"
          />
        </div>
      </Showcase>
    </>
  )
}
