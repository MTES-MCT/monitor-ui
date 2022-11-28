import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikTextInput } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikTextInputProps } from '../../src'

const args: FormikTextInputProps = {
  name: 'myTextInput'
}

export default {
  title: 'Formiks/FormikTextInput',
  component: FormikTextInput,

  argTypes: {},

  args
}

export const _FormikTextInput = (props: FormikTextInputProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextInput?: string
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
