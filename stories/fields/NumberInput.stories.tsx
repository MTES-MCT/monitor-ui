import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { NumberInput, useFieldControl } from '../../src'

import type { NumberInputProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: NumberInputProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  name: 'myNumberInput',
  label: 'A number input',
  value: undefined
}

const meta: Meta<NumberInputProps> = {
  title: 'Fields/NumberInput',
  component: NumberInput,

  argTypes: {
    value: {
      control: 'number'
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

export function _NumberInput(props: NumberInputProps) {
  const [outputValue, setOutputValue] = useState<number | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue, '' as any)

  return (
    <>
      <NumberInput {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
