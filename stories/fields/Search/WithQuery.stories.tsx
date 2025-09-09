import ky from 'ky'
import { useState } from 'react'
import styled from 'styled-components'

import { Description } from '../../../.storybook/components/Description'
import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'
import type { Meta } from '@storybook/react-vite'

const args: SearchProps = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"'
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

export function WithQuery(props: SearchProps) {
  const [objectOutputValue, setObjectOutputValue] = useState<any | undefined>(undefined)
  const [optionsWithObjectValue, setOptionsWithObjectValue] = useState<{ label: any; value: any }[]>([])

  const [simpleOutputValue, setSimpleOutputValue] = useState<any | undefined>(undefined)
  const [optionsWithSimpleValue, setOptionsWithSimpleValue] = useState<{ label: any; value: any }[]>([])

  const onQuery = async value => {
    if (!value) {
      setOptionsWithObjectValue([])

      return
    }

    const results: Record<string, any>[] = await ky
      .get(`https://api.openbrewerydb.org/v1/breweries?by_name=${value}`)
      .json()
    const dataFormatted = results
      ? results?.map(({ id, name }) => ({
          label: name,
          value: {
            id,
            name
          }
        }))
      : []
    setOptionsWithObjectValue(dataFormatted)
  }

  const onSimpleQuery = async value => {
    if (!value) {
      setOptionsWithSimpleValue([])

      return
    }

    const results: Record<string, any>[] = await ky
      .get(`https://api.openbrewerydb.org/v1/breweries?by_name=${value}`)
      .json()
    const dataFormatted = results
      ? results?.map(({ id, name }) => ({
          label: name,
          value: id
        }))
      : []
    setOptionsWithSimpleValue(dataFormatted)
  }

  return (
    <Container>
      <div>
        <Description>With object value</Description>
        <Search
          {...props}
          onChange={setObjectOutputValue}
          onQuery={onQuery}
          options={optionsWithObjectValue}
          optionValueKey="id"
          value={objectOutputValue}
        />

        {objectOutputValue !== undefined && <Output value={objectOutputValue} />}
      </div>
      <div>
        <Description>With simple value</Description>
        <Search
          {...props}
          onChange={setSimpleOutputValue}
          onQuery={onSimpleQuery}
          options={optionsWithSimpleValue}
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
