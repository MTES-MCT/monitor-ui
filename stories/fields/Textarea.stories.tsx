import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Textarea } from '../../src'

import type { TextareaProps } from '../../src'

const args: TextareaProps = {
  defaultValue: undefined,
  isLabelHidden: false,
  isLight: false,
  name: 'myTextarea',
  label: 'A textarea'
}

export default {
  title: 'Fields/Textarea',
  component: Textarea,

  argTypes: {
    defaultValue: {
      control: 'text'
    },
    isMulti: {
      control: 'boolean'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  return (
    <>
      <Textarea {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
