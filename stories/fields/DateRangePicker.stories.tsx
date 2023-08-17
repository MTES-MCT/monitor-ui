import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DateRangePicker } from '../../src'

import type { DateRangePickerWithDateDateProps, DateRangePickerWithStringDateProps } from '../../src'
import type { DateAsStringRange, DateRange } from '../../src/types'

const args: DateRangePickerWithDateDateProps | DateRangePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  error: '',
  isCompact: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  isUndefinedWhenDisabled: false,
  label: 'A date range',
  withTime: true,
  hasSingleCalendar: false
}

export default {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,
  args,

  argTypes: {
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _DateRangePicker(props: any) {
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>()

  return (
    <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
