import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { CoordinatesFormat, CoordinatesInput } from '../../src'

import type { CoordinatesInputProps } from '../../src/fields/CoordinatesInput'
import type { Meta } from '@storybook/react'

const args: CoordinatesInputProps = {
  coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
  defaultValue: undefined,
  disabled: false,
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'Some coordinates'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CoordinatesInputProps> = {
  title: 'Fields/CoordinatesInput',
  component: CoordinatesInput,

  argTypes: {
    coordinatesFormat: {
      control: 'inline-radio',
      options: CoordinatesFormat
    },
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
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _CoordinatesInput(props: CoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<number[] | undefined | '∅'>('∅')

  return (
    <>
      <CoordinatesInput {...props} onChange={nextCoordinates => setOutputValue(nextCoordinates)} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
