import { useRef } from 'react'

import SPECIES from '../../../.storybook/data/species.json'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { Select, type SelectProps, RsuiteSelect } from '../../../src'

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
      withBackgroundButton: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithCustomSearch() {
  const optionsRef = useRef(
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy
    }))
  )

  const speciesAsOptions = SPECIES.map(({ code, name }) => ({ label: name, value: code }))

  return (
    <>
      <RsuiteSelect data={speciesAsOptions} virtualized />

      <div>
        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>
      </div>
    </>
  )
}
