import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikDatePicker } from '../../src'

import type { FormikDatePickerWithDateDateProps, FormikDatePickerWithStringDateProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikDatePickerWithDateDateProps | FormikDatePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  isUndefinedWhenDisabled: false,
  label: 'A date',
  name: 'myDate',
  withTime: true
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<any> = {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,

  argTypes: {
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikDatePicker(props: any) {
  const [outputValue, setOutputValue] = useState<
    | {
        myDate?: Date
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDatePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
