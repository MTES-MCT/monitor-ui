// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { action } from '@storybook/addon-actions'
import { Field, Formik } from 'formik'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect } from '../../src'

import type { FormikEffectProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikEffectProps> = {
  title: 'Formiks/FormikEffect',
  component: FormikEffect,

  argTypes: {},

  args: {
    onChange: action('onChange')
  },

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikEffect() {
  const [outputValue, setOutputValue] = useState<
    | {
        aFormikField?: string
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <p>
            <code>{`<FormikEffect />`}</code> doesn’t render anything. It’s an inner <code>{`<Formik />`}</code>{' '}
            listener component allowing us to get form values outside of Formik context.
          </p>
          <p>
            Here is an example with a simple <code>{`<Formik.Field />`}</code> input:
          </p>
          <Field name="aFormikField" placeholder="Fill me!" style={{ marginTop: 16 }} type="text" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
