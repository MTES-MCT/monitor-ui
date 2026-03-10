// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { isBefore, isAfter, startOfDay, endOfYear, startOfYear, subDays, addDays } from 'date-fns'
import { useState } from 'react'

import { Description } from '../../.storybook/components/Description'
import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { DatePicker } from '../../src'

import type { DatePickerWithDateDateProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const SHOULD_DISABLE_DATE_OPTIONS: Record<string, ((date: Date) => boolean) | undefined> = {
  none: undefined,
  afterToday: (date: Date) => isAfter(date, startOfDay(new Date())),
  beforeToday: (date: Date) => isBefore(date, startOfDay(new Date())),
  betweenRange: (date: Date) =>
    isBefore(date, subDays(startOfDay(new Date()), 7)) || isAfter(date, addDays(startOfDay(new Date()), 7)),
  year2026Only: (date: Date) =>
    isBefore(date, startOfYear(new Date('2026-01-01'))) || isAfter(date, endOfYear(new Date('2026-12-31')))
}

const SHOULD_DISABLE_DATE_LABELS: Record<string, string> = {
  none: 'None',
  afterToday: 'After today (disable future)',
  beforeToday: 'Before today (disable past)',
  betweenRange: 'Between ± 7 days',
  year2026Only: 'Only 2026'
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

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
    isRightAligned: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
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
    shouldDisableDate: {
      control: {
        labels: SHOULD_DISABLE_DATE_LABELS,
        type: 'select'
      },
      mapping: SHOULD_DISABLE_DATE_OPTIONS,
      options: Object.keys(SHOULD_DISABLE_DATE_OPTIONS),
      table: {
        type: {
          summary: '(date: Date) => boolean | undefined'
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
    isCompact: false,
    isEndDate: false,
    isErrorMessageHidden: false,
    isHistorical: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isStringDate: false,
    isRightAligned: false,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A date picker',
    name: 'myDatePicker',
    readOnly: false,
    shouldDisableDate: undefined,
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
      <Description>
        <p>Dates are always picked and displayed in UTC, ignoring you local time zone.</p>
        <p>
          Use <code>shouldDisableDate</code> to disable specific dates. You can use date-fns utilities like{' '}
          <code>isBefore</code>, <code>isAfter</code>, etc.
        </p>
      </Description>

      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>
  )
}
