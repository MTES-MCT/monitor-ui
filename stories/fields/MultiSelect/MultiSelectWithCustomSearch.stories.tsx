import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import SPECIES from '../../../.storybook/data/species.json'
import { MultiSelect, type MultiSelectProps, useFieldControl, CustomSearch } from '../../../src'

import type { Meta } from '@storybook/react'

type Specy = {
  code: string
  name: string
}

const args: MultiSelectProps<Specy> = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [],
  optionValueKey: 'code',
  placeholder: 'Pick some options',
  searchable: true,
  value: undefined,
  virtualized: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiSelectProps<Specy>> = {
  title: 'Fields/MultiSelect',
  component: MultiSelect,

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

export function MultiSelectWithCustomSearch(props: MultiSelectProps<Specy>) {
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
      <MultiSelect
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={optionsRef.current}
        value={controlledValue}
      />
      <div>
        <em>Loads a list of 10,000 users in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
