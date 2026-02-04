import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useEffect, useMemo, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../../.storybook/constants'
import { generateLargeTreeOptions } from '../../../.storybook/data/generateLargeTreeOptions'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { useFieldControl } from '../../../src'

import type { TreeOption } from '@fields/CheckTreePicker/types'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckTreePickerProps> = {
  ...META_DEFAULTS,

  title: 'Fields/CheckTreePicker (variations)',
  component: CheckTreePicker,

  argTypes: {
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isSelect: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    placeholder: ARG_TYPE.OPTIONAL_STRING,
    popupWidth: ARG_TYPE.OPTIONAL_NUMBER,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    searchable: ARG_TYPE.BOOLEAN,
    childrenKey: ARG_TYPE.OPTIONAL_STRING,
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUES
    }
  },

  args: {
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isSelect: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A check tree picker with 825 options:',
    name: 'myCheckTreePicker',
    placeholder: 'Pick some options',
    popupWidth: undefined,
    isMultiSelect: true,
    readOnly: false
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

export function WithLargeDataset(props: CheckTreePickerProps) {
  const [options, setOptions] = useState<TreeOption[]>([])

  const largeOptions = useMemo(() => generateLargeTreeOptions(), [])

  // We mimic a fetch
  useEffect(() => {
    const fetchOptions = async () => {
      await new Promise(resolve => {
        setTimeout(resolve, 200)
      })
      setOptions(largeOptions)
    }

    fetchOptions()
  }, [largeOptions])

  const [outputValue, setOutputValue] = useState<TreeOption[]>()

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <CheckTreePicker {...props} onChange={controlledOnChange} options={options} value={controlledValue} />
      <Output value={outputValue} />
    </>
  )
}
