// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikRichBooleanCheckbox } from '../../src'
import RichBooleanCheckboxStoryMeta from '../fields/RichBooleanCheckbox.stories'

import type { FormikRichBooleanCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikRichBooleanCheckboxProps> = {
  title: 'Formiks/FormikRichBooleanCheckbox',
  component: FormikRichBooleanCheckbox,

  argTypes: omit(RichBooleanCheckboxStoryMeta.argTypes, ['error', 'onChange', 'value']),

  args: omit(RichBooleanCheckboxStoryMeta.args, ['error', 'onChange', 'value']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikRichBooleanCheckbox(props: FormikRichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myRichBooleanCheckbox?: string[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikRichBooleanCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
