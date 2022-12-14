import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Checkbox } from '../../src'

import type { CheckboxProps } from '../../src'

const args: CheckboxProps = {
  defaultChecked: false,
  label: 'Check me',
  name: 'myCheckbox'
}

export default {
  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _Checkbox(props: CheckboxProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅')

  return (
    <>
      <Checkbox {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
