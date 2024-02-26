import { action } from '@storybook/addon-actions'
import { Formik } from 'formik'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'

import { Description } from '../../.storybook/components/Description'
import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikDatePicker } from '../../src'
import DatePickerStoryMeta from '../fields/DatePicker.stories'

import type { FormikDatePickerWithDateDateProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikDatePickerWithDateDateProps> = {
  title: 'Formiks/FormikDatePicker',
  component: FormikDatePicker,

  argTypes: omit(DatePickerStoryMeta.argTypes, ['defaultValue', 'error', 'onChange']),

  args: omit(DatePickerStoryMeta.args, ['defaultValue', 'error', 'onChange']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikDatePicker(props: FormikDatePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myDatePicker?: Date
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Description>
        <p>Dates are always picked and displayed in UTC, ignoring you local time zone.</p>
      </Description>

      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDatePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
