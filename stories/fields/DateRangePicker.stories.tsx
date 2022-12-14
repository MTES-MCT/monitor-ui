import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DateRangePicker } from '../../src'

import type { DateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: DateRangePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A Date Range',
  withTime: true
}

export default {
  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
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
