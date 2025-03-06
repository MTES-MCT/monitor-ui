// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { getArrayFromEnum } from '../../.storybook/utils/getArrayFromEnum'
import { CoordinatesFormat, CoordinatesInput } from '../../src'

import type { CoordinatesInputProps } from '../../src/fields/CoordinatesInput'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CoordinatesInputProps> = {
  ...META_DEFAULTS,

  title: 'Fields/CoordinatesInput',
  component: CoordinatesInput,

  argTypes: {
    coordinatesFormat: {
      control: 'inline-radio',
      options: getArrayFromEnum(CoordinatesFormat)
    },
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
    defaultValue: [47.183333, -7.433333],
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A coordinates input',
    name: 'myCoordinatesInput',
    readOnly: false
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

export function _CoordinatesInput(props: CoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<number[] | undefined | '∅'>('∅')

  return (
    <>
      <CoordinatesInput {...props} onChange={nextCoordinates => setOutputValue(nextCoordinates)} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
