import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { FormikEffect, FormikAutoComplete } from '../../../src'
import { Output } from '../../_components/Output'
import { noop } from '../../_utils/noop'

import type { FormikAutoCompleteProps } from '../../../src'

const args: FormikAutoCompleteProps = {
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"',
  queryMap: ({ id, name }) => ({
    label: name,
    value: id
  }),
  queryUrl: 'https://api.openbrewerydb.org/breweries?by_name=%s'
}

export default {
  title: 'Formiks/FormikAutoComplete',
  component: FormikAutoComplete,

  argTypes: {},

  args
}

export const WithQuery = (props: FormikAutoCompleteProps) => {
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
