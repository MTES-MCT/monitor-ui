import { customDayjs } from '../../utils/customDayjs'

import type { DateTuple, PartialDateTuple, PartialTimeTuple, TimeTuple } from './types'
import type { DateAsStringRange, DateRange, Option } from '../../types'
import type { Dayjs } from 'dayjs'

export function formatNumberAsDoubleDigit(numberLike: number | string): string {
  return String(numberLike).padStart(2, '0')
}

/**
 * @description
 * This function will treat any date & time tuple in UTC, whichever the current time zone is.
 *
 * @example
 * ```ts
 * console.log(getDateFromDateAndTimeTuple(['2021', '31', '12'], ['00', '00']).toISOString())
 * // => "2021-12-31T00:00:00.000Z"
 * console.log(getDateFromDateAndTimeTuple(['2021', '31', '12'], ['23', '59'], true).toISOString())
 * // => "2021-12-31T23:59:59.000Z"
 * ```
 */
export function getDayjsFromUtcDateAndTimeTuple(
  utcDateTuple: DateTuple,
  utcTimeTuple: TimeTuple,
  isEnd: boolean = false
): Dayjs {
  const [year, month, day] = utcDateTuple
  const [hour, minute] = utcTimeTuple

  const rawDateAsDayjs = customDayjs()
    .utc()
    .year(Number(year))
    .month(Number(month) - 1)
    .date(Number(day))
    .hour(Number(hour))
    .minute(Number(minute))

  return isEnd
    ? rawDateAsDayjs
        .endOf('minute')
        // TODO For some reason the API can't handle miliseconds in dates.
        // That's why we set it to 0 (instead of 999)
        .millisecond(0)
    : rawDateAsDayjs.startOf('minute')
}

/**
 * @description
 * This function will treat any date & time tuple in UTC, whichever the current time zone is.
 *
 * @example
 * ```ts
 * console.log(getDateFromDateAndTimeTuple(['2021', '31', '12'], ['00', '00'], false).toISOString())
 * // => "2021-12-31T00:00:00.000Z"
 * console.log(getDateFromDateAndTimeTuple(['2021', '31', '12'], ['23', '59'], true).toISOString())
 * // => "2021-12-31T23:59:59.000Z"
 * ```
 */
export function getUtcDateFromDateAndTimeTuple(
  dateTuple: PartialDateTuple,
  timeTuple: PartialTimeTuple,
  isEnd: boolean
): Date | undefined {
  const [year, month, day] = dateTuple
  const [hour, minute] = timeTuple

  if (!year || !month || !day || !hour || !minute) {
    return undefined
  }

  const rawDateAsDayjs = customDayjs()
    .utc()
    .year(Number(year))
    .month(Number(month) - 1)
    .date(Number(day))
    .hour(Number(hour))
    .minute(Number(minute))

  return isEnd
    ? rawDateAsDayjs
        .endOf('minute')
        // TODO For some reason the API can't handle miliseconds in dates.
        // That's why we set it to 0 (instead of 999)
        .millisecond(0)
        .toDate()
    : rawDateAsDayjs.startOf('minute').toDate()
}

export function getDateTupleFromUtcDate(utcDate?: Date): PartialDateTuple {
  if (!utcDate) {
    return [undefined, undefined, undefined]
  }

  return [
    String(utcDate.getFullYear()),
    formatNumberAsDoubleDigit(utcDate.getMonth() + 1),
    formatNumberAsDoubleDigit(utcDate.getDate())
  ]
}

/**
 * Generate a list of ranged time options.
 *
 * @example
 * ```
 * (minutesRange = 30) => ([
 *   { label: '00:00', value: ['00', '00'] },
 *   { label: '00:30', value: ['00', '30'] },
 *   { label: '01:00', value: ['01', '00'] },
 *   { label: '01:30', value: ['01', '30'] },
 *   { label: '02:00', value: ['02', '00'] },
 *   ...
 * ])
 * ```
 */
export const getRangedTimeOptions = (minutesRange: number): Option<TimeTuple>[] => {
  const perHourOptionsLength = 60 / minutesRange
  const totalOptionsLength = 24 * perHourOptionsLength

  return new Array(totalOptionsLength).fill(undefined).map((_, index) => {
    const hour = Math.floor(index / perHourOptionsLength)
    const minute = minutesRange * (index % perHourOptionsLength)
    const label = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
    const value: TimeTuple = [formatNumberAsDoubleDigit(hour), formatNumberAsDoubleDigit(minute)]

    return {
      label,
      value
    }
  })
}

export function getTimeTupleFromUtcDate(utcDate?: Date): PartialTimeTuple {
  if (!utcDate) {
    return [undefined, undefined]
  }

  return [formatNumberAsDoubleDigit(utcDate.getHours()), formatNumberAsDoubleDigit(utcDate.getMinutes())]
}

export function getUtcDateTupleFromDayjs(dateAsDayjs?: Dayjs): PartialDateTuple {
  if (!dateAsDayjs) {
    return [undefined, undefined, undefined]
  }

  return [dateAsDayjs.utc().format('YYYY'), dateAsDayjs.utc().format('MM'), dateAsDayjs.utc().format('DD')]
}

export function getUtcTimeTupleFromDayjs(dateAsDayjs?: Dayjs): PartialTimeTuple {
  if (!dateAsDayjs) {
    return [undefined, undefined]
  }

  return [dateAsDayjs.utc().format('HH'), dateAsDayjs.utc().format('mm')]
}

export function getUtcizedDateTupleFromDateRange(
  dateRange: DateRange | DateAsStringRange | undefined,
  isEndDate: boolean
): PartialDateTuple {
  if (!dateRange) {
    return [undefined, undefined, undefined]
  }

  const dateAsDayjs = customDayjs(dateRange[isEndDate ? 1 : 0])

  return [dateAsDayjs.utc().format('YYYY'), dateAsDayjs.utc().format('MM'), dateAsDayjs.utc().format('DD')]
}

export function getUtcizedTimeTupleFromDateRange(
  dateRange: DateRange | DateAsStringRange | undefined,
  isEndDate: boolean
): PartialTimeTuple {
  if (!dateRange) {
    return [undefined, undefined]
  }

  const dateAsDayjs = customDayjs(dateRange[isEndDate ? 1 : 0])

  return [dateAsDayjs.utc().format('HH'), dateAsDayjs.utc().format('mm')]
}

export function isFullDateTuple(partialDateTuple: PartialDateTuple): partialDateTuple is DateTuple {
  const [year, month, day] = partialDateTuple

  return !!year && !!month && !!day
}

// The type is not accurate here but it's good enough to use the protoypes we need for the feature
// (they would work with any HTML element).
export function isHtmlElement(element: Document | HTMLDivElement | undefined): element is HTMLDivElement {
  if (!element) {
    return false
  }

  return Boolean((element as HTMLDivElement).tagName)
}

export function isFullTimeTuple(partialTimeTuple: PartialTimeTuple): partialTimeTuple is TimeTuple {
  const [hour, minute] = partialTimeTuple

  return !!hour && !!minute
}
