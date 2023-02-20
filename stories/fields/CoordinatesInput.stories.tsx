import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { CoordinatesFormat, CoordinatesInput } from '../../src'

import type { CoordinatesInputProps } from '../../src/fields/CoordinatesInput'

const args: CoordinatesInputProps = {
  defaultValue: [],
  coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'Some coordinates'
}

export default {
  title: 'Fields/CoordinatesInput',
  component: CoordinatesInput,

  argTypes: {
    defaultValue: {
      control: 'string'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _CoordinatesInput(props: CoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<number[] | '∅'>('∅')

  return (
    <>
      <CoordinatesInput {...props} onChange={nextCoordinates => setOutputValue(nextCoordinates)} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
