import { Formik } from 'formik'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { noop } from '../../.storybook/utils/noop'
import { FormikEffect, FormikDatePicker } from '../../src'

import type { FormikDatePickerProps } from '../../src'

const args: FormikDatePickerProps = {
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A Date',
  name: 'myDate',
  withTime: false
}

export default {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikDatePicker(props: FormikDatePickerProps) {
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
