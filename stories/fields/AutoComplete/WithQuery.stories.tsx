import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { AutoComplete } from '../../../src'

import type { AutoCompleteProps } from '../../../src'

const args: AutoCompleteProps = {
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"',
  queryMap: ({ id, name }) => ({
    label: name,
    value: id
  }),
  queryUrl: 'https://api.openbrewerydb.org/breweries?by_name=%s'
}

export default {
  title: 'Fields/AutoComplete',
  component: AutoComplete,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithQuery(props: AutoCompleteProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <AutoComplete {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
