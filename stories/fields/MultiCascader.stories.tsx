import { useState } from 'react'

import {
  FAKE_CITIES_AS_LABELS_FOR_DEPTH_2_STORY,
  FAKE_CITIES_AS_MAPPING_FOR_DEPTH_2_STORY,
  FAKE_COUNTRIES_WITH_CITIES_AS_TREE_OPTIONS,
  type FakeCity
} from './MultiCascader/constants'
import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { MultiCascader, useFieldControl } from '../../src'

import type { MultiCascaderProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiCascaderProps<FakeCity>> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiCascader',
  component: MultiCascader,

  argTypes: {
    baseContainer: ARG_TYPE.OPTIONAL_BASE_CONTAINER,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    value: {
      control: 'inline-check',
      mapping: FAKE_CITIES_AS_MAPPING_FOR_DEPTH_2_STORY,
      options: FAKE_CITIES_AS_LABELS_FOR_DEPTH_2_STORY
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
    options: FAKE_COUNTRIES_WITH_CITIES_AS_TREE_OPTIONS,
    placeholder: 'Pick some options',
    readOnly: false,
    searchable: true,
    value: undefined
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

export function _MultiCascader(props: MultiCascaderProps<FakeCity>) {
  const [outputValue, setOutputValue] = useState<FakeCity[] | undefined | '∅'>(props.value ?? '∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <MultiCascader {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
