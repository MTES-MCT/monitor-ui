import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { noop } from '../../.storybook/utils/noop'
import { FormikEffect, FormikMultiSelect } from '../../src'

import type { FormikMultiSelectProps } from '../../src'

const args: FormikMultiSelectProps = {
  fixedWidth: 160,
  isLabelHidden: false,
  isLight: false,
  label: 'A multiple select',
  name: 'myMultiSelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  placeholder: 'Pick some options'
}

export default {
  title: 'Formiks/FormikMultiSelect',
  component: FormikMultiSelect,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikMultiSelect(props: FormikMultiSelectProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myMultiSelect?: string[]
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
