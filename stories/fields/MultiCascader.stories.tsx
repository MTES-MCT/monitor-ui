import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_TREE_OPTIONS,
  FAKE_STRING_TREE_OPTIONS_AS_LABELS,
  FAKE_STRING_TREE_OPTIONS_AS_MAPPING
} from '../../__mocks__/fake_tree_options'
import { MultiCascader, useFieldControl } from '../../src'

import type { MultiCascaderProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiCascaderProps<string>> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiCascader',
  component: MultiCascader,

  argTypes: {
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    placeholder: ARG_TYPE.OPTIONAL_STRING,
    popupWidth: ARG_TYPE.OPTIONAL_NUMBER,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    value: {
      control: 'inline-check',
      mapping: FAKE_STRING_TREE_OPTIONS_AS_MAPPING,
      options: FAKE_STRING_TREE_OPTIONS_AS_LABELS
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
    label: 'A multiple cascader. Pick some options:',
    name: 'myMultiCascader',
    options: FAKE_STRING_TREE_OPTIONS,
    placeholder: 'Pick some options',
    popupWidth: undefined,
    readOnly: false,
    searchable: true,
    value: undefined
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withPseudoStateButtons: { targetSelector: '[role="combobox"]' },
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _MultiCascader(props: MultiCascaderProps<string>) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>(props.value ?? '∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <MultiCascader {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
