import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { RichBooleanCheckbox, useFieldControl } from '../../src'

import type { RichBoolean, RichBooleanCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<RichBooleanCheckboxProps> = {
  ...META_DEFAULTS,

  title: 'Fields/RichBooleanCheckbox',
  component: RichBooleanCheckbox,

  argTypes: {
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    disabled: false,
    error: '',
    falseOptionLabel: 'Without something',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A rich boolean checkbox. Pick one, both or neither options:',
    name: 'myRichBooleanCheckbox',
    readOnly: false,
    trueOptionLabel: 'With something',
    value: undefined
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

export function _RichBooleanCheckbox(props: RichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<RichBoolean | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <RichBooleanCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
