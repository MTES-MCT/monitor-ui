import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { DatePicker } from '../../src'

import type { DatePickerProps } from '../../src'

const args: DatePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A Date',
  withTime: true
}

export default {
  title: 'Fields/DatePicker',
  component: DatePicker,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _DatePicker(props: DatePickerProps) {
  const [outputValue, setOutputValue] = useState<Date>()

  return (
    <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
