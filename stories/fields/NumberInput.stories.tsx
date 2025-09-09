// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { NumberInput, useFieldControl } from '../../src'

import type { NumberInputProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<NumberInputProps> = {
  title: 'Fields/NumberInput',
  component: NumberInput,

  argTypes: {
    areArrowsHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    onChange: ARG_TYPE.NO_CONTROL_INPUT,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    unit: ARG_TYPE.OPTIONAL_STRING,
    value: ARG_TYPE.OPTIONAL_NUMBER
  },

  args: {
    areArrowsHidden: false,
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A number input',
    name: 'myNumberInput',
    placeholder: 'Pick a number',
    readOnly: false,
    unit: ''
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
