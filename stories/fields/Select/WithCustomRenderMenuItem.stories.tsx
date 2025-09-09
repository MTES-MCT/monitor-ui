import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { ARG_TYPE } from '../../../.storybook/constants'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_OPTIONS,
  FAKE_STRING_OPTIONS_AS_LABELS,
  FAKE_STRING_OPTIONS_AS_MAPPING
} from '../../../__mocks__/fake_options'
import { Icon, Select, useFieldControl, type SelectProps } from '../../../src'

import type { Meta } from '@storybook/react-vite'

const args: SelectProps<string> = {
  disabled: false,
  error: '',
  isCleanable: true,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  label: 'A select',
  name: 'mySelect',
  options: FAKE_STRING_OPTIONS,
  placeholder: 'Pick an option',
  value: undefined,
  virtualized: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SelectProps<string>> = {
  title: 'Fields/Select (variations)',
  component: Select,

  argTypes: {
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUE,
      options: [...FAKE_STRING_OPTIONS_AS_LABELS, undefined],
      mapping: {
        ...FAKE_STRING_OPTIONS_AS_MAPPING,
        // eslint-disable-next-line object-shorthand
        undefined: undefined
      }
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      withBackgroundButton: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function WithCustomRenderMenuItem(props: SelectProps<string>) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  const renderMenuItem = (label, _) => (
    <>
      <Icon.Alert />
      <span>{label}</span>
    </>
  )

  return (
    <>
      <Select {...props} onChange={controlledOnChange} renderMenuItem={renderMenuItem} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
