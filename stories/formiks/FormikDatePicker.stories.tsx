import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikDatePicker } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikDatePickerProps } from '../../src'

const args: FormikDatePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  label: 'A Date',
  name: 'myDate',
  withTime: false
}

export default {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,

  argTypes: {},

  args
}

export const _FormikDatePicker = (props: FormikDatePickerProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myDate?: Date
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDatePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
