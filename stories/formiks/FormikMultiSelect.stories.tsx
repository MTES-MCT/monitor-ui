import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikMultiSelect } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikMultiSelectProps } from '../../src'

const args: FormikMultiSelectProps = {
  placeholder: 'Pick some options',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

export default {
  title: 'Formiks/FormikMultiSelect',
  component: FormikMultiSelect,

  argTypes: {},

  args
}

export const _FormikMultiSelect = (props: FormikMultiSelectProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        mySelect?: string[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
