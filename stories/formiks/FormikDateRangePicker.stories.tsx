import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { noop } from '../../.storybook/utils/noop'
import { FormikEffect, FormikDateRangePicker } from '../../src'

import type { FormikDateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: FormikDateRangePickerProps = {
  baseContainer: undefined,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A Date Range',
  name: 'myDateRange',
  withTime: false
}

export default {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,
  args,

  argTypes: {},

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikDateRangePicker(props: FormikDateRangePickerProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myDateRange?: DateRange
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
