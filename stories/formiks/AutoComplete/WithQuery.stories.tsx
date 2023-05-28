import { Formik } from 'formik'
import ky from 'ky'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikSearch } from '../../../src'

import type { FormikSearchProps } from '../../../src'

const args: FormikSearchProps = {
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type "brew"'
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

  const [options, setOptions] = useState<{ label: any; value: any }[]>([])

  const onQuery = async value => {
    const results: Record<string, any>[] = await ky
      .get(`https://api.openbrewerydb.org/breweries?by_name=${value}`)
      .json()

    const dataFormatted = results
      ? results.map(({ id, name }) => ({
          label: name,
          value: id
        }))
      : []
    setOptions(dataFormatted)
  }

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSearch {...props} onQuery={onQuery} options={options} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
