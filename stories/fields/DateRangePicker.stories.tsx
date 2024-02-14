import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DateRangePicker } from '../../src'

import type { DateRangePickerWithDateDateProps, DateRangePickerWithStringDateProps } from '../../src'
import type { DateAsStringRange, DateRange } from '../../src/types/definitions'
import type { Meta } from '@storybook/react'

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

const meta: Meta<any> = {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
export default meta

export function _DateRangePicker(props: any) {
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>()

  return (
    <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
