import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikDateRangePicker } from '../../src'

import type { FormikDateRangePickerWithDateDateProps, FormikDateRangePickerWithStringDateProps } from '../../src'
import type { DateRange } from '../../src/types'

const args: FormikDateRangePickerWithDateDateProps | FormikDateRangePickerWithStringDateProps = {
  baseContainer: undefined,
  disabled: false,
  isErrorMessageHidden: false,
  isHistorical: false,
  isLabelHidden: false,
  isLight: false,
  isStringDate: false,
  isUndefinedWhenDisabled: false,
  label: 'A date range',
  name: 'myDateRange',
  withTime: true
}

export default {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,
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

export function _FormikDateRangePicker(props: any) {
  const [outputValue, setOutputValue] = useState<
    | {
        myDateRange?: DateRange
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}