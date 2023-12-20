import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { LOREM_IPSUM } from '../../../.storybook/constants'
import { Select, useFieldControl, type SelectProps } from '../../../src'

import type { Meta } from '@storybook/react'

const args: SelectProps = {
  disabled: false,
  error: '',
  isCleanable: true,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION', isDisabled: true },
    { label: 'Second Option', value: 'SECOND_OPTION', isDisabled: false },
    { label: 'Third Option', value: 'THIRD_OPTION', isDisabled: false },
    { label: LOREM_IPSUM, value: 'LOREM_IPSUM', isDisabled: false }
  ],
  placeholder: 'Pick an option',
  searchable: false,
  value: undefined,
  virtualized: false
}

const meta: Meta<SelectProps> = {
  title: 'Fields/Select',
  component: Select,

  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
      withNewWindowButton: true
    })
  ]
}

export default meta

export function _Select(props: SelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <Select {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
