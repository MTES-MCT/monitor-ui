import { Field, Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

export default {
  title: 'Formiks/FormikEffect',
  component: FormikEffect,

  argTypes: {},

  args: {}
}

export const _FormikEffect = () => {
  const [outputValue, setOutputValue] = useState<
    | {
        aFormikField?: string
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <p>
            <code>{`<FormikEffect />`}</code> doesn’t show anything. It’s an inner <code>{`<Formik />`}</code> listener
            component allowing us to get form values outside of Formik context.
          </p>
          <p>
            Here is an example with a simple <code>{`<Formik.Field />`}</code> input:
          </p>
          <Field name="aFormikField" placeholder="Fill me!" type="text" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
