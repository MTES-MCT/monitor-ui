import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikDateRangePicker } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikDateRangePickerWithDateDateProps, FormikDateRangePickerWithStringDateProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: FormikDateRangePickerWithDateDateProps | FormikDateRangePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  label: 'A Date Range',
  name: 'myDateRange',
  withTime: false
}

export default {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,
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

export function _FormikDateRangePicker(props: any) {
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
