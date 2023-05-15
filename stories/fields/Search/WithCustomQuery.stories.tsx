import ky from 'ky'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { Option, Search } from '../../../src'

import type { SearchProps } from '../../../src'

const args: SearchProps = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"'
}

export default {
  title: 'Fields/Search',
  component: Search,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithCustomQuery(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')
  const [options, setOptions] = useState<Option[]>([])

  const onQuery = async nextQuery => {
    const url = `https://api.openbrewerydb.org/breweries?by_name=${nextQuery}`
    const rawData: Record<string, any>[] = await ky.get(url).json()

    setOptions(
      rawData.map(({ id, name }) => ({
        label: name,
        value: id
      }))
    )
  }

  return (
    <>
      <Search {...props} onChange={setOutputValue} onQuery={onQuery} options={options} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
