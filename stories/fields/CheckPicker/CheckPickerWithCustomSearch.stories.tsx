import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { LOREM_IPSUM } from '../../../.storybook/constants'
import SPECIES from '../../../.storybook/data/species.json'
import { useFieldControl, CustomSearch, CheckPicker, type CheckPickerProps } from '../../../src'

import type { Meta } from '@storybook/react'

type Specy = {
  code: string
  name: string
}

const args: CheckPickerProps<{}> = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A check picker',
  name: 'myCheckPicker',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: LOREM_IPSUM, value: 'LOREM_IPSUM' }
  ],
  placeholder: 'Pick some options',
  searchable: true,
  value: [],
  virtualized: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckPickerProps<{}>> = {
  title: 'Fields/CheckPicker',
  component: CheckPicker as any,

  argTypes: {
    value: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _CheckPickerWithCustomSearch(props: CheckPickerProps<Specy>) {
  const optionsRef = useRef(
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy
    }))
  )
  const customSearchRef = useRef(
    new CustomSearch(
      optionsRef.current,
      [
        {
          name: 'value.code',
          weight: 0.9
        },
        {
          name: 'value.name',
          weight: 0.1
        }
      ],
      { isStrict: true }
    )
  )

  const [outputValue, setOutputValue] = useState<Specy[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <CheckPicker
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={optionsRef.current}
        optionValueKey="code"
        value={controlledValue}
        virtualized
      />
      <div>
        <em>Loads a list of 10,000 users in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
