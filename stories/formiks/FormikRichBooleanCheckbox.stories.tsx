import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikRichBooleanCheckbox } from '../../src'

import type { FormikRichBooleanCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikRichBooleanCheckboxProps = {
  disabled: false,
  falseOptionLabel: 'Without something',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'Pick one, both or neither options:',
  name: 'myRichBooleanCheckbox',
  trueOptionLabel: 'With something'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikRichBooleanCheckboxProps> = {
  title: 'Formiks/FormikRichBooleanCheckbox',
  component: FormikRichBooleanCheckbox,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
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
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikRichBooleanCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
