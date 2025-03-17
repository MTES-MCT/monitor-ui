/* eslint-disable react-hooks/rules-of-hooks */
import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import TAGS from '../../.storybook/data/tags.json'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { useFieldControl } from '../../src'

import type { TreeOption } from '@fields/CheckTreePicker/types'
import type { Meta } from '@storybook/react'
/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckTreePickerProps> = {
  ...META_DEFAULTS,

  title: 'Fields/CheckTreePicker',
  component: CheckTreePicker,

  argTypes: {
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    placeholder: ARG_TYPE.OPTIONAL_STRING,
    popupWidth: ARG_TYPE.OPTIONAL_NUMBER,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    searchable: ARG_TYPE.BOOLEAN,
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUES,
      options: TAGS
    }
  },

  args: {
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A check tree picker. Pick some options:',
    name: 'myCheckTreePicker',
    options: TAGS,
    placeholder: 'Pick some options',
    popupWidth: undefined,
    readOnly: false,
    searchable: true,
    virtualized: false
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

export function _CheckTreePicker(props: CheckTreePickerProps) {
  const [outputValue, setOutputValue] = useState<TreeOption[]>()

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <CheckTreePicker {...props} onChange={controlledOnChange} searchable value={controlledValue} virtualized />

      <Output value={outputValue} />
    </>
  )
}
