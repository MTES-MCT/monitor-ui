import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'
import type { Meta } from '@storybook/react'

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
  isSearchIconVisible: false,
  label: 'An autocompletable select',
  MenuItem,
  name: 'autoComplete',
  options: [
    { label: 'First Option', value: { name: 'First Option', subValue: 'FIRST_OPTION' } },
    { label: 'Second Option', value: { name: 'Second Option', subValue: 'SECOND_OPTION' } },
    { label: 'Third Option', value: { name: 'Third Option', subValue: 'THIRD_OPTION' } },
    {
      label: 'A Very Very Long Option',
      value: { name: 'A Very Very Long  Option', subValue: 'A_VERY_VERY_LONG_OPTION' }
    }
  ],
  optionValueKey: 'name' as any,
  placeholder: 'Type "first"'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SearchProps<Value>> = {
  title: 'Fields/Search',
  component: Search,

  argTypes: {
    value: {
      control: 'text'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithOptionsAndCustomMenuItem(props: SearchProps<Value>) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

  return (
    <>
      <Search<Value> {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
