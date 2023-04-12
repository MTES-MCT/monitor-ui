import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiCheckbox } from '../../src'

import type { MultiCheckboxProps } from '../../src'

const args: MultiCheckboxProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  label: 'Pick some options',
  name: 'myMultiCheckbox',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  value: undefined
}

export default {
  title: 'Fields/MultiCheckbox',
  component: MultiCheckbox,

  argTypes: {
    value: {
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

export function _MultiCheckbox(props: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiCheckbox {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
