import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'

type Value = {
  id: number
  name: string
}

const args: SearchProps<Value> = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "first"',
  optionValueKey: 'name' as any,
  options: [
    { label: 'First Option', value: { id: 1, name: 'First Option' } },
    { label: 'Second Option', value: { id: 2, name: 'Second Option' } },
    { label: 'Third Option', value: { id: 3, name: 'Third Option' } },
    { label: 'A Very Very Long Option', value: { id: 4, name: 'A Very Very Long Option' } }
  ],
  value: undefined
}

export default {
  title: 'Fields/Search',
  component: Search,

  argTypes: {
    defaultValue: {
      control: 'text'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithOptions(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

  return (
    <>
      <Search {...props} MenuItem={undefined} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
