import { describe, expect, it } from '@jest/globals'

import { sortDates } from '../sortDates'

describe('utils/sortDates()', () => {
  const firstDate = new Date('2022-01-01T00:00:00.000')
  const secondDate = new Date('2022-01-02T00:00:00.000')

  it('should return a sorted list of dates with an already sorted list of dates', () => {
    const dates = [firstDate, secondDate]

    const result = sortDates(dates)

    expect(result).toStrictEqual([firstDate, secondDate])
  })

  it('should return a sorted list of dates with an unsorted list of dates', () => {
    const dates = [secondDate, firstDate]

    const result = sortDates(dates)

    expect(result).toStrictEqual([firstDate, secondDate])
  })

  it('should handle array with only start date defined', () => {
    const dates: Array<Date | undefined> = [firstDate, undefined]

    const result = sortDates(dates)

    expect(result).toStrictEqual([firstDate, undefined])
  })

  it('should handle array with only end date defined', () => {
    const dates: Array<Date | undefined> = [undefined, secondDate]

    const result = sortDates(dates)

    expect(result).toStrictEqual([undefined, secondDate])
  })

  it('should handle array with both dates undefined', () => {
    const dates: Array<Date | undefined> = [undefined, undefined]

    const result = sortDates(dates)

    expect(result).toStrictEqual([undefined, undefined])
  })

  it('should return original array for arrays with more than 2 elements and mixed defined/undefined', () => {
    const dates: Array<Date | undefined> = [firstDate, undefined, secondDate]

    const result = sortDates(dates)

    expect(result).toStrictEqual([firstDate, undefined, secondDate])
  })
})
