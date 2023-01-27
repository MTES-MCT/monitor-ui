import { Field, Formik } from 'formik'
import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikEffectProps } from '../../src'

const args: FormikEffectProps = {
  onChange: noop
}

export default {
  title: 'Formiks/FormikEffect',
  component: FormikEffect,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

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
