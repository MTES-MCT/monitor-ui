import { useState } from 'react'

import { AutoComplete } from '../../../src'
import { Output } from '../../_components/Output'

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

  args
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
