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
  label: 'A number input',
  name: 'myNumberInput',
  value: undefined
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
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
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

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
