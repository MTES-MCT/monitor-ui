import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
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
  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {
    checked: {
      control: 'boolean'
    },
    className: {
      table: {
        disable: true
      }
    },
    disabled: {
      control: 'boolean'
    },
    error: {
      control: 'text'
    },
    isErrorMessageHidden: {
      control: 'boolean'
    },
    isLight: {
      control: 'boolean'
    },
    isUndefinedWhenDisabled: {
      control: 'boolean'
    },
    onChange: {
      table: {
        disable: true
      }
    },
    style: {
      table: {
        disable: true
      }
    },
    readOnly: {
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
