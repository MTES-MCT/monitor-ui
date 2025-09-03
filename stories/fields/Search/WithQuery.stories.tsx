import ky from 'ky'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'
import type { Meta } from '@storybook/react'

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
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')
  const [options, setOptions] = useState<{ label: any; value: any }[]>([])

  const onQuery = async value => {
    const results: Record<string, any>[] = await ky
      .get(`https://api.openbrewerydb.org/v1/breweries?by_name=${value}`)
      .json()

    const dataFormatted = results
      ? results.map(({ id, name }) => ({
          label: name,
          value: id
        }))
      : []
    setOptions(dataFormatted)
  }

  return (
    <>
      <Search {...props} onChange={setOutputValue} onQuery={onQuery} options={options} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
