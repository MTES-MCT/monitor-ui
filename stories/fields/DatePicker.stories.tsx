import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DatePicker } from '../../src'

import type { DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: DatePickerWithDateDateProps | DatePickerWithStringDateProps = {
  baseContainer: undefined,
  defaultValue: undefined,
  disabled: false,
  error: '',
  isCompact: false,
  isEndDate: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  isUndefinedWhenDisabled: false,
  label: 'A date',
  minutesRange: undefined,
  withTime: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<any> = {
  title: 'Fields/DatePicker',
  component: DatePicker,

  argTypes: {
    defaultValue: {
      control: 'date'
    },
    isEndDate: {
      control: {
        type: 'boolean'
      }
    },
    isStringDate: {
      control: 'boolean'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DatePicker(props: any) {
  const [outputValue, setOutputValue] = useState<Date | string>()

  return (
    <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
