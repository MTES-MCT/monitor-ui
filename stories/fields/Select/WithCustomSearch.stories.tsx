import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import SPECIES from '../../../.storybook/data/species.json'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { CustomSearch, Select, useFieldControl, type SelectProps } from '../../../src'

import type { Meta } from '@storybook/react'

type Specy = {
  code: string
  name: string
}

const args: SelectProps<Specy> = {
  disabled: false,
  error: '',
  isCleanable: true,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  label: 'A select',
  name: 'mySelect',
  options: [],
  optionValueKey: 'code',
  placeholder: 'Pick an option',
  value: undefined,
  virtualized: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SelectProps<Specy>> = {
  title: 'Fields/Select (variations)',
  component: Select,

  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithCustomSearch(props: SelectProps<Specy>) {
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
      { cacheKey: 'PNO_SPECIES_AS_OPTIONS', isStrict: true }
    )
  )

  const [outputValue, setOutputValue] = useState<Specy | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <Select
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={optionsRef.current}
        value={controlledValue}
      />
      <div>
        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}

      <hr/>

      <div>
        <em>Do not add the `searchable` property to the component when there is a `customSearch`, as it will impact the scroll performance.</em>
        <em>Example :</em>
      </div>
      <Select
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={optionsRef.current}
        value={controlledValue}
        searchable
      />
      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
