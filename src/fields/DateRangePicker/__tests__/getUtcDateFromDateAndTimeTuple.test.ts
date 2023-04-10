import { expect } from '@jest/globals'

import { getUtcDateFromDateAndTimeTuple } from '../utils'

import type { DateTuple, TimeTuple } from '../types'

describe('ui/DateRangePicker/utils.getUtcDateFromDateAndTimeTuple()', () => {
  it('should return the expected date from a date and a time tuple', () => {
    const dateTuple: DateTuple = ['2021', '12', '31']
    const timeTuple: TimeTuple = ['00', '00']

    const result = getUtcDateFromDateAndTimeTuple(dateTuple, timeTuple)

    expect(result.toISOString()).toStrictEqual('2021-12-31T00:00:00.000Z')
  })

  it('should return the expected date from a date and a time tuple with `isEnd` = `true`', () => {
    const dateTuple: DateTuple = ['2021', '12', '31']
    const timeTuple: TimeTuple = ['23', '59']

    const result = getUtcDateFromDateAndTimeTuple(dateTuple, timeTuple, true)

    expect(result.toISOString()).toStrictEqual('2021-12-31T23:59:59.000Z')
  })
})
