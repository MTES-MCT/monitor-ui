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
    // disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    // error: ARG_TYPE.OPTIONAL_STRING,
    // isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    // isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    // isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    // isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    // isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    // isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    onChange: ARG_TYPE.NO_CONTROL_INPUT,
    // readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    value: ARG_TYPE.OPTIONAL_STRING
  },

  args: {
    // disabled: false,
    // error: '',
    // isErrorMessageHidden: false,
    // isLabelHidden: false,
    // isLight: false,
    // isRequired: true,
    // isTransparent: false,
    // isUndefinedWhenDisabled: false,
    label: 'A phone number input'
    // name: 'myNumberInput',
    // placeholder: 'Pick a number',
    // readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _PhoneInput(props: PhoneInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue, '' as any)

  return (
    <>
      <PhoneInput {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
