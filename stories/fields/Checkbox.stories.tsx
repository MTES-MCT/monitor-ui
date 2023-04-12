import { useEffect, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Checkbox } from '../../src'

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
  const [outputValue, setOutputValue] = useState<boolean | undefined>(props.checked)
  useEffect(() => {
    setOutputValue(props.checked)
  }, [props.checked])

  return (
    <>
      <Checkbox {...props} checked={outputValue} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
