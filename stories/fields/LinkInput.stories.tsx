// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { LinkInput, type LinkInputProps } from '@fields/LinkInput'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { useFieldControl } from '../../src'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LinkInputProps> = {
  title: 'Fields/LinkInput',
  component: LinkInput,

  argTypes: {
    onChange: ARG_TYPE.NO_CONTROL_INPUT,
    value: ARG_TYPE.OPTIONAL_STRING
  },

  args: {
    disabled: false,
    error: '',
    isRequired: false,
    isTransparent: false,
    isLight: false,
    label: 'A link input',
    placeholder: 'https://www.google.fr',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}

export default meta

export function _LinkInput(props: LinkInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined>()

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <LinkInput {...props} onChange={controlledOnChange} value={controlledValue} />

      <Output value={outputValue} />
    </>
  )
}
