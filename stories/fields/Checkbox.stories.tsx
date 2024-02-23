import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { Checkbox, useFieldControl } from '../../src'

import type { CheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: CheckboxProps = {
  checked: false,
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLight: false,
  isUndefinedWhenDisabled: false,
  label: 'Check me',
  name: 'myCheckbox',
  readOnly: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckboxProps> = {
  ...META_DEFAULTS,

  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {
    checked: ARG_TYPE.OPTIONAL_BOOLEAN,
    className: ARG_TYPE.NO_CONTROL,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    hasError: ARG_TYPE.NO_CONTROL,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
