import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikDatePicker } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikDatePickerProps } from '../../src'

export default {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,

  argTypes: {},

  args: {
    isHistorical: false,
    isLabelHidden: false,
    label: 'FormikDatePicker Label',
    name: 'myDate',
    withTime: false
  }
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
