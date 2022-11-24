import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikDateRangePicker } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikDateRangePickerProps } from '../../src'
import type { DateRange } from '../../src/types'

export default {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,

  argTypes: {},

  args: {
    isHistorical: false,
    isLabelHidden: false,
    label: 'FormikDateRangePicker Label',
    name: 'myDateRange'
  }
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
