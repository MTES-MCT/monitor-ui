import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { Showcase } from '../../.storybook/components/Showcase'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Icon, Size, TextInput, useFieldControl } from '../../src'

import type { TextInputProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TextInputProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  isSearchInput: false,
  isUndefinedWhenDisabled: false,
  label: 'A text input',
  name: 'myTextInput',
  placeholder: 'A text input placeholder',
  size: Size.NORMAL,
  value: undefined
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<TextInputProps> = {
  title: 'Fields/TextInput',
  component: TextInput,

  argTypes: {
    isUndefinedWhenDisabled: {
      control: 'boolean'
    },
    isSearchInput: {
      control: 'boolean'
    },
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
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _TextInput(props: TextInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue, '')
  const { controlledOnChange: controlledOnChangeBis, controlledValue: controlledValueBis } = useFieldControl(
    props.value,
    setOutputValue,
    ''
  )

  return (
    <>
      <TextInput {...props} onChange={controlledOnChange} value={controlledValue} />

      <TextInput
        {...props}
        isSearchInput
        label="A search text input"
        onChange={controlledOnChangeBis}
        value={controlledValueBis}
      />

      {outputValue !== '∅' && <Output value={outputValue} />}

      <Showcase>
        <TextInput
          Icon={Icon.Search}
          label="A text input with an icon"
          name="myTextInputWithAnIcon"
          onChange={controlledOnChange}
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
