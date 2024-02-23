import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { LOREM_IPSUM } from '../../../.storybook/constants'
import { CheckPicker, useFieldControl, type CheckPickerProps } from '../../../src'

import type { Meta } from '@storybook/react'

const args: CheckPickerProps<string> = {
  customSearch: undefined,
  customSearchMinQueryLength: undefined,
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  isUndefinedWhenDisabled: false,
  label: 'A check picker',
  name: 'myCheckPicker',
  onChange: undefined,
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: LOREM_IPSUM, value: 'LOREM_IPSUM' }
  ],
  optionValueKey: undefined,
  placeholder: 'Pick some options',
  searchable: true,
  value: [],
  virtualized: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckPickerProps<string>> = {
  title: 'Fields/CheckPicker',
  component: CheckPicker,

  argTypes: {
    value: {
      control: 'inline-check',
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
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _CheckPicker(props: CheckPickerProps<string>) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <CheckPicker {...props} onChange={controlledOnChange} style={{ width: '300px' }} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
