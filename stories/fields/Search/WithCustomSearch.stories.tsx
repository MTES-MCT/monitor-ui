import { useState } from 'react'
import { styled } from 'styled-components'

import { Description } from '../../../.storybook/components/Description'
import { Output } from '../../../.storybook/components/Output'
import SPECIES from '../../../.storybook/data/species.json'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { CustomSearch, Search, type SearchProps } from '../../../src'

import type { Meta } from '@storybook/react-vite'

type Specy = {
  code: string
  name: string
}

const args: SearchProps = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type what you want'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SearchProps> = {
  title: 'Fields/Search (variations)',
  component: Search,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithCustomSearch(props: SearchProps) {
  const [objectOutputValue, setObjectOutputValue] = useState<Specy | undefined>(undefined)
  const [simpleOutputValue, setSimpleOutputValue] = useState<string | undefined>(undefined)

  const [options] = useState(() =>
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy
    }))
  )

  const [customSearch] = useState(
    () =>
      new CustomSearch(
        options,
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
        { isStrict: false, shouldIgnoreLocation: true }
      )
  )

  const [simpleOptions] = useState(() =>
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy.name
    }))
  )
  const [simpleCustomSearch] = useState(
    () =>
      new CustomSearch(
        simpleOptions,
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
        { isStrict: false, shouldIgnoreLocation: true }
      )
  )

  return (
    <Container>
      <div>
        <Description>With object value</Description>
        <Search
          {...props}
          customSearch={customSearch}
          onChange={setObjectOutputValue}
          optionValueKey="name"
          options={options}
          value={objectOutputValue}
        />

        {objectOutputValue !== undefined && <Output value={objectOutputValue} />}
      </div>
      <div>
        <Description>With simple value</Description>
        <Search
          {...props}
          customSearch={simpleCustomSearch}
          onChange={setSimpleOutputValue}
          options={simpleOptions}
          value={simpleOutputValue}
        />

        {simpleOutputValue !== undefined && <Output value={simpleOutputValue} />}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`
