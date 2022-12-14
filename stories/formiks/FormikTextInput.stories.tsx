import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikTextInput } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikTextInputProps } from '../../src'

const args: FormikTextInputProps = {
  name: 'myTextInput',
  label: 'A text input'
}

export default {
  title: 'Formiks/FormikTextInput',
  component: FormikTextInput,

  argTypes: {},

  args
}

export function _FormikTextInput(props: FormikTextInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextInput?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
