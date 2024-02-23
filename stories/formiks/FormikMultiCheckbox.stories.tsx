import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikMultiCheckbox } from '../../src'

import type { FormikMultiCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikMultiCheckboxProps = {
  disabled: false,
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  label: 'Pick some options',
  name: 'myMultiCheckbox',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikMultiCheckboxProps> = {
  title: 'Formiks/FormikMultiCheckbox',
  component: FormikMultiCheckbox,

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

export function _FormikMultiCheckbox(props: FormikMultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myMultiCheckbox?: string[]
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
