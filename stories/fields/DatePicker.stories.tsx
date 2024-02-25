import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { DatePicker } from '../../src'

import type { DatePickerWithDateDateProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DatePickerWithDateDateProps> = {
  ...META_DEFAULTS,

  title: 'Fields/DatePicker',
  component: DatePicker,

  argTypes: {
    baseContainer: ARG_TYPE.OPTIONAL_BASE_CONTAINER,
    defaultValue: {
      control: 'date',
      table: {
        type: {
          detail: 'If `isStringDate` is `true`, `string | undefined`, otherwise `Date | undefined`.',
          summary: 'Date | string | undefined'
        }
      }
    },
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isCompact: ARG_TYPE.OPTIONAL_BOOLEAN,
    isEndDate: ARG_TYPE.OPTIONAL_BOOLEAN,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isHistorical: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isStringDate: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    minutesRange: ARG_TYPE.OPTIONAL_NUMBER,
    onChange: {
      ...ARG_TYPE.NO_CONTROL_INPUT,
      table: {
        type: {
          detail: 'If `isStringDate` is `true`, `string | undefined`, otherwise `Date | undefined`.',
          summary: '(nextValue: Date | undefined) => void | (nextValue: string | undefined) => void'
        }
      }
    },
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    withTime: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    baseContainer: undefined,
    defaultValue: undefined,
    disabled: false,
    error: '',
    isCompact: false,
    isEndDate: false,
    isErrorMessageHidden: false,
    isHistorical: false,
    isLabelHidden: false,
    isLight: false,
    isStringDate: false,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A date picker (always picked and displayed in UTC, bypassing your local timezone)',
    name: 'myDatePicker',
    readOnly: false,
    withTime: true
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DatePicker(props: DatePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<Date | string>()

  return (
    <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
