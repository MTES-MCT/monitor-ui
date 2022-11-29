import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikTextarea } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikTextareaProps } from '../../src'

const args: FormikTextareaProps = {
  name: 'myTextarea',
  label: 'A textarea'
}

export default {
  title: 'Formiks/FormikTextarea',
  component: FormikTextarea,

  argTypes: {},

  args
}

export const _FormikTextarea = (props: FormikTextareaProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextarea?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextarea {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
