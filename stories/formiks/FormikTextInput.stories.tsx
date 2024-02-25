import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikTextInput } from '../../src'
import TextInputStoryMeta from '../fields/TextInput.stories'

import type { FormikTextInputProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikTextInputProps> = {
  title: 'Formiks/FormikTextInput',
  component: FormikTextInput,

  argTypes: omit(TextInputStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(TextInputStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
