import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { LOREM_IPSUM } from '../../../.storybook/constants'
import { MultiSelect, useFieldControl } from '../../../src'

import type { MultiSelectProps } from '../../../src'
import type { Meta } from '@storybook/react'

const args: MultiSelectProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: LOREM_IPSUM, value: 'LOREM_IPSUM' }
  ],
  placeholder: 'Pick some options',
  searchable: true,
  value: undefined,
  virtualized: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiSelectProps> = {
  title: 'Fields/MultiSelect',
  component: MultiSelect,

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

export function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <MultiSelect {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
