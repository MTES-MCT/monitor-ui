import { Formik } from 'formik'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { FormikEffect, FormikDateRangePicker, Button } from '../../src'
import { noop } from '../../src/utils/noop'

import type { DateAsStringRange, DateRange } from '../../src/types'

export default {
  title: 'Samples/FormikForm',
  component: FormikForm,

  args: {}
}

type SampleFormValues = {
  dateRange: DateAsStringRange
}
const INITIAL_VALUES: SampleFormValues = {
  dateRange: [new Date().toISOString(), new Date(new Date().valueOf() + 3600000).toISOString()]
}

export function FormikForm() {
  const [isDisabled, setIsDisabled] = useState(false)
  const [outputValue, setOutputValue] = useState<
    | {
        myDateRange?: DateRange
      }
    | '∅'
  >('∅')

  return (
    <>
      <Button onClick={() => setIsDisabled(!isDisabled)}>{isDisabled ? 'Enable' : 'Disable'}</Button>

      <Formik initialValues={INITIAL_VALUES} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker disabled={isDisabled} label="Date Range" name="dateRange" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
