import { useState } from 'react'

import { DateRangePicker } from '../../src'
import { Output } from '../_components/Output'

import type { DateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

export default {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {},

  args: {
    isHistorical: false,
    isLabelHidden: false,
    label: 'DateRangePicker Label',
    withTime: true
  }
}

export const _DateRangePicker = (props: DateRangePickerProps) => {
  const [outputValue, setOutputValue] = useState<DateRange>()

  return (
    <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
