import { useRef, useState } from 'react'
import styled from 'styled-components'

import { Description } from '../../../.storybook/components/Description'
import { Output } from '../../../.storybook/components/Output'
import SPECIES from '../../../.storybook/data/species.json'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { CustomSearch, Search, type SearchProps } from '../../../src'

import type { Meta } from '@storybook/react'

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
  const [objectOutputValue, setObjectOutputValue] = useState<any | undefined>(undefined)
  const [simpleOutputValue, setSimpleOutputValue] = useState<any | undefined>(undefined)
  const objectOptionsRef = useRef(
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy
    }))
  )
  const objectCustomSearchRef = useRef(
    new CustomSearch(
      objectOptionsRef.current,
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

  const simpleOptionsRef = useRef(
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy.name
    }))
  )

  const simpleCustomSearchRef = useRef(
    new CustomSearch(
      simpleOptionsRef.current,
      [
        {
          name: 'value',
          weight: 0.9
        },
        {
          name: 'label',
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
          customSearch={objectCustomSearchRef.current}
          onChange={setObjectOutputValue}
          options={objectOptionsRef.current}
          optionValueKey="name"
          value={objectOutputValue}
        />

        {objectOutputValue !== undefined && <Output value={objectOutputValue} />}
      </div>
      <div>
        <Description>With simple value</Description>
        <Search
          {...props}
          customSearch={simpleCustomSearchRef.current}
          onChange={setSimpleOutputValue}
          options={simpleOptionsRef.current}
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
