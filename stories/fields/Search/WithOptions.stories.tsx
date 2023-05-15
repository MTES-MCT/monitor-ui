import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { Search } from '../../../src'

import type { SearchProps } from '../../../src'

const args: SearchProps = {
  defaultValue: undefined,
  error: '',
  isLabelHidden: false,
  isSearchIconHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "first"',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
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

export function WithOptions(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

  return (
    <>
      <Search
        {...props}
        MenuItem={undefined}
        onChange={setOutputValue}
        options={[
          { label: 'First Option', value: 'FIRST_OPTION' },
          { label: 'Second Option', value: 'SECOND_OPTION' },
          { label: 'Third Option', value: 'THIRD_OPTION' },
          { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
        ]}
      />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
