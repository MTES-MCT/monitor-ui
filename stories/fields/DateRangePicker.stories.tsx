import { useState } from 'react'

import { DateRangePicker } from '../../src'
import { Output } from '../_components/Output'

import type { DateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: DateRangePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  label: 'A Date Range',
  withTime: true
}

export default {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {},

  args
}

export function _DateRangePicker(props: DateRangePickerProps) {
  const [outputValue, setOutputValue] = useState<DateRange>()

  return (
    <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
