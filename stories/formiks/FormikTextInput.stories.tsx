import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikTextInput } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikTextInputProps } from '../../src'

const args: FormikTextInputProps = {
  disabled: false,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  name: 'myTextInput',
  label: 'A text input'
}

export default {
  title: 'Formiks/FormikTextInput',
  component: FormikTextInput,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikTextInput(props: FormikTextInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextInput?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
