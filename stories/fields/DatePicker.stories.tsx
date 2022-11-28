import { useState } from 'react'

import { DatePicker } from '../../src'
import { Output } from '../_components/Output'

import type { DatePickerProps } from '../../src'

const args: DatePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  label: 'A Date',
  withTime: true
}

export default {
  title: 'Fields/DatePicker',
  component: DatePicker,

  argTypes: {},

  args
}

export const _DatePicker = (props: DatePickerProps) => {
  const [outputValue, setOutputValue] = useState<Date>()

  return (
    <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
