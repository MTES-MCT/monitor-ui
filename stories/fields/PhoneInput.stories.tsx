import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { PhoneInput, useFieldControl } from '../../src'

import type { PhoneInputProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<PhoneInputProps> = {
  title: 'Fields/PhoneInput',
  component: PhoneInput,

  argTypes: {
    onChange: ARG_TYPE.NO_CONTROL_INPUT,
    value: ARG_TYPE.OPTIONAL_STRING
  },

  args: {
    disabled: false,
    error: '',
    isRequired: false,
    label: 'A phone number input',
    // placeholder: 'Type a phone number',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}

export default meta

export function _PhoneInput(props: PhoneInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined>()

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <PhoneInput {...props} onChange={controlledOnChange} value={controlledValue} />

      <Output value={outputValue} />
    </>
  )
}
