import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { noop } from '../../../.storybook/utils/noop'
import { FormikEffect, FormikAutoComplete } from '../../../src'

import type { FormikAutoCompleteProps } from '../../../src'

const args: FormikAutoCompleteProps = {
  isLabelHidden: false,
  isLight: false,
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

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
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
