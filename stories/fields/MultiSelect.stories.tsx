import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_OPTIONS,
  FAKE_STRING_OPTIONS_AS_LABELS,
  FAKE_STRING_OPTIONS_AS_MAPPING
} from '../../__mocks__/fake_options'
import { MultiSelect, useFieldControl } from '../../src'

import type { MultiSelectProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiSelectProps> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiSelect',
  component: MultiSelect,

  argTypes: {
    customSearch: ARG_TYPE.NO_CONTROL_INPUT,
    customSearchMinQueryLength: ARG_TYPE.OPTIONAL_NUMBER_NO_CONTROL_INPUT,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    optionValueKey: ARG_TYPE.OPTIONAL_OPTION_VALUE_KEY,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    searchable: ARG_TYPE.BOOLEAN,
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
    isLabelHidden: false,
    isLight: false,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A multiple select',
    name: 'myMultiSelect',
    options: FAKE_STRING_OPTIONS,
    placeholder: 'A multiple select. Pick some options:',
    readOnly: false,
    searchable: true,
    virtualized: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
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
