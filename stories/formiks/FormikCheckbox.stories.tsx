import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikCheckbox } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikCheckboxProps } from '../../src'

const args: FormikCheckboxProps = {
  label: 'Check me',
  name: 'myCheckbox'
}

export default {
  title: 'Formiks/FormikCheckbox',
  component: FormikCheckbox,

  argTypes: {},

  args
}

export const _FormikCheckbox = (props: FormikCheckboxProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        myCheckbox?: boolean
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
