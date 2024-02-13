import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Textarea, useFieldControl } from '../../src'

import type { TextareaProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: TextareaProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A textarea',
  name: 'myTextarea',
  placeholder: 'A textarea placeholder',
  value: undefined
}

const meta: Meta<TextareaProps> = {
  title: 'Fields/Textarea',
  component: Textarea,

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
export default meta

export function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue, '')

  return (
    <>
      <Textarea {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
