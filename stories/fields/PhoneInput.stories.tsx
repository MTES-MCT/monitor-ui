// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

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
    placeholder: '01 23 45 67 89 ou 00 594 12 34 56 78 90',
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
