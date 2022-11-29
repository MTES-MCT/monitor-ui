import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikMultiCheckbox } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikMultiCheckboxProps } from '../../src'

const args: FormikMultiCheckboxProps = {
  name: 'myMultiCheckbox',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  label: 'Pick some options'
}

export default {
  title: 'Formiks/FormikMultiCheckbox',
  component: FormikMultiCheckbox,

  argTypes: {},

  args
}

export const _FormikMultiCheckbox = (props: FormikMultiCheckboxProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myMultiCheckbox?: string[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
