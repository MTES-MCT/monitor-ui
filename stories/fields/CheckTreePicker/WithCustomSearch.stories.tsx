import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { META_DEFAULTS } from '../../../.storybook/constants'
import { TAGS } from '../../../.storybook/data/tags'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { useFieldControl, CustomSearch } from '../../../src'
import { checkTreePickerArgs, checkTreePickerArgsType } from '../CheckPicker.stories'

import type { TreeOption } from '@fields/CheckTreePicker/types'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckTreePickerProps> = {
  ...META_DEFAULTS,

  title: 'Fields/CheckTreePicker (variations)',
  component: CheckTreePicker,

  argTypes: checkTreePickerArgsType,

  args: {
    ...checkTreePickerArgs,
    childrenKey: 'subThemes',
    valueKey: 'id',
    labelKey: 'name'
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

export function WithCustomSearch(props: CheckTreePickerProps) {
  const options = TAGS(props.childrenKey, props.labelKey, props.valueKey)
  const customSearchRef = useRef(
    new CustomSearch(
      options,
      [
        {
          name: 'name'
        },
        {
          name: 'subThemes.name'
        }
      ],
      { childrenKey: props.childrenKey, isStrict: true }
    )
  )

  const [outputValue, setOutputValue] = useState<TreeOption[]>()

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <CheckTreePicker
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={options}
        searchable
        value={controlledValue}
        virtualized
      />
      <Output value={outputValue} />
    </>
  )
}
