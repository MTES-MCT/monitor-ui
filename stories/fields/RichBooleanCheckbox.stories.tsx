import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { RichBooleanCheckbox, useFieldControl } from '../../src'

import type { RichBoolean, RichBooleanCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: RichBooleanCheckboxProps = {
  disabled: false,
  error: '',
  falseOptionLabel: 'Without something',
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  label: 'Pick one, both or neither options:',
  name: 'myRichBooleanCheckbox',
  trueOptionLabel: 'With something',
  value: undefined
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<RichBooleanCheckboxProps> = {
  title: 'Fields/RichBooleanCheckbox',
  component: RichBooleanCheckbox,

  argTypes: {
    value: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
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

export function _RichBooleanCheckbox(props: RichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<RichBoolean | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <RichBooleanCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
