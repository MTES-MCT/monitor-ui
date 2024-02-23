import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiCheckbox, useFieldControl } from '../../src'

import type { MultiCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: MultiCheckboxProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  isUndefinedWhenDisabled: false,
  label: 'Pick some options',
  name: 'myMultiCheckbox',
  options: [
    { isDisabled: false, label: 'First Option', value: 'FIRST_OPTION' },
    { isDisabled: true, label: 'Second Option', value: 'SECOND_OPTION' },
    { isDisabled: false, label: 'Third Option', value: 'THIRD_OPTION' },
    { isDisabled: false, label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  readOnly: false,
  value: undefined
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiCheckboxProps> = {
  title: 'Fields/MultiCheckbox',
  component: MultiCheckbox,

  argTypes: {
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
    isInline: {
      control: 'boolean'
    },
    isLabelHidden: {
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
        type: {
          detail: '(nextValue: OptionValue[] | undefined) => Promisable<void>'
        }
      },
      type: 'function'
    },
    readOnly: {
      control: 'boolean'
    },
    style: {
      table: {
        disable: true
      }
    },
    value: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
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

export function _MultiCheckbox(props: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <MultiCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
