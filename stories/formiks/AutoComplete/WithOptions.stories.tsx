import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikAutoComplete } from '../../../src'
import { Output } from '../../_components/Output'
import { noop } from '../../_utils/noop'

import type { FormikAutoCompleteProps } from '../../../src'

const args: FormikAutoCompleteProps = {
  label: 'An autocompletable select',
  name: 'autoComplete',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  placeholder: 'Type "first"'
}

export default {
  title: 'Formiks/FormikAutoComplete',
  component: FormikAutoComplete,

  argTypes: {},

  args
}

export const WithOptions = (props: FormikAutoCompleteProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        mySelect?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikAutoComplete {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
