import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { noop } from '../../.storybook/utils/noop'
import { FormikEffect, FormikCheckbox } from '../../src'

import type { FormikCheckboxProps } from '../../src'

const args: FormikCheckboxProps = {
  label: 'Check me',
  name: 'myCheckbox'
}

export default {
  title: 'Formiks/FormikCheckbox',
  component: FormikCheckbox,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export function _FormikCheckbox(props: FormikCheckboxProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myCheckbox?: boolean
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
