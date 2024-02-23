import { useState } from 'react'

import {
  FAKE_CITIES_AS_LABELS_FOR_DEPTH_2_STORY,
  FAKE_CITIES_AS_MAPPING_FOR_DEPTH_2_STORY,
  FAKE_COUNTRIES_WITH_CITIES_AS_TREE_OPTIONS,
  type FakeCity
} from './constants'
import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { MultiCascader, useFieldControl } from '../../../src'

import type { MultiCascaderProps } from '../../../src'
import type { Meta } from '@storybook/react'

const args: MultiCascaderProps<FakeCity> = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple cascader',
  name: 'myMultiCascader',
  options: FAKE_COUNTRIES_WITH_CITIES_AS_TREE_OPTIONS,
  placeholder: 'Pick some options',
  searchable: true,
  value: undefined
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiCascaderProps<FakeCity>> = {
  title: 'Fields/MultiCascader',
  component: MultiCascader,

  argTypes: {
    value: {
      control: 'inline-check',
      mapping: FAKE_CITIES_AS_MAPPING_FOR_DEPTH_2_STORY,
      options: FAKE_CITIES_AS_LABELS_FOR_DEPTH_2_STORY
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
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
