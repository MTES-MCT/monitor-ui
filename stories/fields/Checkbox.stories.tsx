import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Checkbox, useFieldControl } from '../../src'

import type { CheckboxProps } from '../../src'

const args: CheckboxProps = {
  checked: false,
  disabled: false,
  error: '',
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

  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(
    props.checked,
    setOutputValue as any
  )

  return (
    <>
      <Checkbox {...props} checked={controlledChecked} onChange={controlledOnChange} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
