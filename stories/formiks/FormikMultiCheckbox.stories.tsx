import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikMultiCheckbox } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikMultiCheckboxProps } from '../../src'

const args: FormikMultiCheckboxProps = {
  disabled: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
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

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikMultiCheckbox(props: FormikMultiCheckboxProps) {
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
