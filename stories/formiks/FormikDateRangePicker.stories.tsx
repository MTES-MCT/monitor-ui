import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikDateRangePicker } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikDateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: FormikDateRangePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  label: 'A Date Range',
  name: 'myDateRange',
  withTime: false
}

export default {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,

  argTypes: {},

  args
}

export const _FormikDateRangePicker = (props: FormikDateRangePickerProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myDateRange?: DateRange
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
