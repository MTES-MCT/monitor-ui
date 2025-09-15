// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { omit } from 'lodash-es'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikCheckPicker } from '../../src'
import CheckPickerStoryMeta from '../fields/CheckPicker.stories'

import type { FormikCheckPickerProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikCheckPickerProps> = {
  title: 'Formiks/FormikCheckPicker',
  component: FormikCheckPicker,

  argTypes: omit(CheckPickerStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(CheckPickerStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikCheckPicker(props: FormikCheckPickerProps) {
  const [outputValue, setOutputValue] = useState<{ myCheckPicker?: string[] } | '∅'>('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckPicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
