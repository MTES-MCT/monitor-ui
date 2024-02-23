import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DateRangePicker } from '../../src'

import type { DateRangePickerWithDateDateProps } from '../../src'
import type { DateAsStringRange, DateRange } from '../../src/types/definitions'
import type { Meta } from '@storybook/react'

const args: DateRangePickerWithDateDateProps = {
  baseContainer: undefined,
  defaultValue: undefined,
  disabled: false,
  error: '',
  hasSingleCalendar: false,
  isCompact: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  isUndefinedWhenDisabled: false,
  label: 'A date range',
  minutesRange: undefined,
  withTime: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DateRangePickerWithDateDateProps> = {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {
    disabled: {
      control: 'boolean'
    },
    isLight: {
      control: 'boolean'
    },
    isLabelHidden: {
      control: 'boolean'
    },
    isStringDate: {
      control: 'boolean'
    },
    isUndefinedWhenDisabled: {
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

export function _DateRangePicker(props: DateRangePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>()

  return (
    <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
