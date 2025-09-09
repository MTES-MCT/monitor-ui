// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { FormikLinkInput, type FormikLinkInputProps } from 'formiks/FormikLinkInput'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect } from '../../src'
import LinkInputStoryMeta from '../fields/LinkInput.stories'

import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikLinkInputProps> = {
  title: 'Formiks/FormikLinkInput',
  component: FormikLinkInput,

  argTypes: omit(LinkInputStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit({ name: 'link', ...LinkInputStoryMeta.args }, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikLinkInput(props: FormikLinkInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myLinkInput?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikLinkInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
