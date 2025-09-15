// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { omit } from 'lodash-es'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikMultiSelect } from '../../src'
import MultiSelectStoryMeta from '../fields/MultiSelect.stories'

import type { FormikMultiSelectProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikMultiSelectProps> = {
  title: 'Formiks/FormikMultiSelect',
  component: FormikMultiSelect,

  argTypes: omit(MultiSelectStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(MultiSelectStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikMultiSelect(props: FormikMultiSelectProps) {
  const [outputValue, setOutputValue] = useState<{ myMultiSelect?: string[] } | '∅'>('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
