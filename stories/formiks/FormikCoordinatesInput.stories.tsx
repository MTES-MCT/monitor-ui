// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikCoordinatesInput, FormikEffect } from '../../src'
import CoordinatesInputStoryMeta from '../fields/CoordinatesInput.stories'

import type { FormikCoordinatesInputProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikCoordinatesInputProps> = {
  title: 'Formiks/FormikCoordinatesInput',
  component: FormikCoordinatesInput,

  argTypes: omit(CoordinatesInputStoryMeta.argTypes, ['defaultValue', 'error', 'onChange']),

  args: omit(CoordinatesInputStoryMeta.args, ['defaultValue', 'error', 'onChange']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikCoordinatesInput(props: FormikCoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myCoordinatesInput?: number[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCoordinatesInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
