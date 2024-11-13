// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikPhoneInput } from '../../src'
import PhoneInputStoryMeta from '../fields/PhoneInput.stories'

import type { FormikPhoneInputProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikPhoneInputProps> = {
  title: 'Formiks/FormikPhoneInput',
  component: FormikPhoneInput,

  argTypes: omit(PhoneInputStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit({ name: 'phone', ...PhoneInputStoryMeta.args }, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikPhoneInput(props: FormikPhoneInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myPhoneInput?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikPhoneInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
