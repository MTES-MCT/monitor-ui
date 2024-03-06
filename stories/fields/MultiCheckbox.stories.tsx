import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_OPTIONS,
  FAKE_STRING_OPTIONS_AS_LABELS,
  FAKE_STRING_OPTIONS_AS_MAPPING
} from '../../__mocks__/fake_options'
import { MultiCheckbox, useFieldControl } from '../../src'

import type { MultiCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiCheckboxProps> = {
  title: 'Fields/MultiCheckbox',
  component: MultiCheckbox,

  argTypes: {
    className: ARG_TYPE.NO_CONTROL,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: {
      control: 'text'
    },
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isInline: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL,
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUES,
      options: [...FAKE_STRING_OPTIONS_AS_LABELS, undefined],
      mapping: {
        ...FAKE_STRING_OPTIONS_AS_MAPPING,
        // eslint-disable-next-line object-shorthand
        undefined: undefined
      }
    }
  },

  args: {
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isInline: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A multiple checkbox. Pick some options:',
    name: 'myMultiCheckbox',
    options: FAKE_STRING_OPTIONS,
    readOnly: false,
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

export function _MultiCheckbox(props: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <MultiCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
