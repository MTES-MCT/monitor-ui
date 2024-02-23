import { Field, Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect } from '../../src'

import type { FormikEffectProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikEffectProps = {
  onChange: noop
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikEffectProps> = {
  title: 'Formiks/FormikEffect',
  component: FormikEffect,

  argTypes: {},

  args,

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
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <p>
            <code>{`<FormikEffect />`}</code> doesn’t show anything. It’s an inner <code>{`<Formik />`}</code> listener
            component allowing us to get form values outside of Formik context.
          </p>
          <p>
            Here is an example with a simple <code>{`<Formik.Field />`}</code> input:
          </p>
          <Field name="aFormikField" placeholder="Fill me!" type="text" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
