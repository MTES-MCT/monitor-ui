// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'
import { DateRangePicker as RsuiteDateRangePicker } from 'rsuite'

import { Description } from '../../.storybook/components/Description'
import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { DateRangePicker } from '../../src'

import type { DateRangePickerWithDateDateProps } from '../../src'
import type { DateAsStringRange, DateRange } from '../../src/types/definitions'
import type { Meta } from '@storybook/react-vite'

const { afterToday, allowedMaxDays, allowedRange, beforeToday, combine } = RsuiteDateRangePicker

const SHOULD_DISABLE_DATE_OPTIONS = {
  afterToday: afterToday(),
  'allowedMaxDays(7)': allowedMaxDays(7),
  'allowedRange(2025)': allowedRange('2025-01-01', '2025-12-31'),
  'allowedRange(2026)': allowedRange('2026-01-01', '2026-12-31'),
  beforeToday: beforeToday(),
  'combine(allowedMaxDays(7), beforeToday)': combine(allowedMaxDays(7), beforeToday()),
  none: undefined
}

const SHOULD_DISABLE_DATE_LABELS = {
  afterToday: 'afterToday()',
  'allowedMaxDays(7)': 'allowedMaxDays(7)',
  'allowedRange(2025)': "allowedRange('2025-01-01', '2025-12-31')",
  'allowedRange(2026)': "allowedRange('2026-01-01', '2026-12-31')",
  beforeToday: 'beforeToday()',
  'combine(allowedMaxDays(7), beforeToday)': 'combine(allowedMaxDays(7), beforeToday())',
  none: 'None'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DateRangePickerWithDateDateProps> = {
  ...META_DEFAULTS,

  title: 'Fields/DateRangePicker',
  component: DateRangePicker,

  argTypes: {
    baseContainer: ARG_TYPE.OPTIONAL_BASE_CONTAINER,
    defaultValue: {
      ...ARG_TYPE.NO_CONTROL_INPUT,
      table: {
        type: { summary: '[Date, Date] | [string, string] | undefined' }
      }
    },
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    hasSingleCalendar: ARG_TYPE.OPTIONAL_BOOLEAN,
    isCompact: ARG_TYPE.OPTIONAL_BOOLEAN,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isHistorical: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isStringDate: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    minutesRange: ARG_TYPE.OPTIONAL_NUMBER,
    onChange: {
      ...ARG_TYPE.NO_CONTROL_INPUT,
      table: {
        type: {
          detail: 'If `isStringDate` is `true`, `[string, string] | undefined`, otherwise `[Date, Date] | undefined.`.',
          summary: '(nextValue: [Date, Date] | undefined) => void | (nextValue: [string, string] | undefined) => void'
        }
      }
    },
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    shouldDisableDate: {
      control: {
        labels: SHOULD_DISABLE_DATE_LABELS,
        type: 'select'
      },
      mapping: SHOULD_DISABLE_DATE_OPTIONS,
      options: Object.keys(SHOULD_DISABLE_DATE_OPTIONS),
      table: {
        type: {
          summary: 'DisabledDateFunction | undefined'
        }
      }
    },
    withTime: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    baseContainer: undefined,
    defaultValue: undefined,
    disabled: false,
    error: '',
    hasSingleCalendar: false,
    isCompact: false,
    isErrorMessageHidden: false,
    isHistorical: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isStringDate: false,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A date range picker',
    name: 'myDateRangePicker',
    minutesRange: undefined,
    readOnly: false,
    shouldDisableDate: undefined,
    withTime: true
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DateRangePicker(props: DateRangePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>()

  return (
    <>
      <Description>
        <p>Dates are always picked and displayed in UTC, ignoring you local time zone.</p>
        <p>
          Use <code>shouldDisableDate</code> with rsuite utilities: <code>afterToday()</code>,{' '}
          <code>beforeToday()</code>, <code>allowedRange(start, end)</code>, <code>allowedMaxDays(days)</code>,{' '}
          <code>combine(...conditions)</code>, etc.
        </p>
      </Description>

      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
