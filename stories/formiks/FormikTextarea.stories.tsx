import { Formik } from 'formik'
import { useMemo, useState } from 'react'
import * as Yup from 'yup'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikTextarea } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikTextareaProps } from '../../src'

const args: FormikTextareaProps = {
  disabled: false,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  name: 'myTextarea',
  label: 'A textarea'
}

export default {
  title: 'Formiks/FormikTextarea',
  component: FormikTextarea,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikTextarea(props: FormikTextareaProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextarea?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])
  const TextareaShema = useMemo(
    () =>
      Yup.object().shape({
        [props.name]: Yup.string().required()
      }),
    [props.name]
  )

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop} validationSchema={TextareaShema}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextarea {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
