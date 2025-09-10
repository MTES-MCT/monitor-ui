// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { Formik } from 'formik'
import omit from 'lodash/omit'
import { useMemo, useState } from 'react'
import { action } from 'storybook/actions'

import { Description } from '../../.storybook/components/Description'
import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { FormikEffect, FormikDateRangePicker } from '../../src'
import DateRangePickerStoryMeta from '../fields/DateRangePicker.stories'

import type { FormikDateRangePickerWithDateDateProps } from '../../src'
import type { DateRange } from '../../src/types/definitions'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikDateRangePickerWithDateDateProps> = {
  title: 'Formiks/FormikDateRangePicker',
  component: FormikDateRangePicker,

  argTypes: omit(DateRangePickerStoryMeta.argTypes, ['defaultValue', 'error', 'onChange']),

  args: omit(DateRangePickerStoryMeta.args, ['defaultValue', 'error', 'onChange']),

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikDateRangePicker(props: FormikDateRangePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myDateRangePicker?: DateRange
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

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
