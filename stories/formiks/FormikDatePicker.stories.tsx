import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikDatePicker } from '../../src'
import { noop } from '../../src/utils/noop'

import type { FormikDatePickerWithDateDateProps, FormikDatePickerWithStringDateProps } from '../../src'

const args: FormikDatePickerWithDateDateProps | FormikDatePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  label: 'A Date',
  name: 'myDate',
  withTime: false
}

export default {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,
  args,

  argTypes: {
    isStringDate: {
      control: {
        type: 'boolean'
      }
    }
  },

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

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
