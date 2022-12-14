import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiSelect } from '../../src'

import type { MultiSelectProps } from '../../src'

const args: MultiSelectProps = {
  defaultValue: undefined,
  fixedWidth: 160,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  placeholder: 'Pick some options'
}

export default {
  title: 'Fields/MultiSelect',
  component: MultiSelect,

  argTypes: {
    defaultValue: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiSelect {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
