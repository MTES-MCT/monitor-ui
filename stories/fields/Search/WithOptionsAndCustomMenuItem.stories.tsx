import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'

type Value = {
  name: string
  subValue: string
}

function MenuItem({ item }) {
  return (
    <>
      My custom menu item:
      <br />
      {item}
    </>
  )
}

const args: SearchProps<Value> = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "first"',
  optionValueKey: 'name' as any,
  isSearchIconVisible: false,
  MenuItem,
  options: [
    { label: 'First Option', value: { name: 'First Option', subValue: 'FIRST_OPTION' } },
    { label: 'Second Option', value: { name: 'Second Option', subValue: 'SECOND_OPTION' } },
    { label: 'Third Option', value: { name: 'Third Option', subValue: 'THIRD_OPTION' } },
    {
      label: 'A Very Very Long Option',
      value: { name: 'A Very Very Long  Option', subValue: 'A_VERY_VERY_LONG_OPTION' }
    }
  ]
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

export function WithOptionsAndCustomMenuItem(props: SearchProps<Value>) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

  return (
    <>
      <Search<Value> {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
