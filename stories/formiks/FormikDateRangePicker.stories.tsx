import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikDateRangePicker } from '../../src'

import type { FormikDateRangePickerWithDateDateProps, FormikDateRangePickerWithStringDateProps } from '../../src'
import type { DateRange } from '../../src/types/definitions'
import type { Meta } from '@storybook/react'

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

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<any> = {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,

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
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

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
