import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikSearch } from '../../../src'
import { noop } from '../../../src/utils/noop'

import type { FormikSearchProps } from '../../../src'

const args: FormikSearchProps = {
  isLabelHidden: false,
  isLight: false,
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
  title: 'Formiks/FormikSearch',
  component: FormikSearch,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export const WithQuery = (props: FormikSearchProps) => {
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

          <FormikSearch {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
