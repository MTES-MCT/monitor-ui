import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiCoordinatesInput } from '../../src'

import type { MultiCoordinatesInputProps } from '../../src'

const args: MultiCoordinatesInputProps = {
  addButtonLabel: 'Add coordinates',
  defaultValue: undefined,
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'Some zones'
}

export default {
  title: 'Fields/MultiCoordinatesInput',
  component: MultiCoordinatesInput,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _MultiCoordinatesInput(props: MultiCoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<Record<string, any>[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiCoordinatesInput {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
