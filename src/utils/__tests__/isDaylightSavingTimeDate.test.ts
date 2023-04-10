import { expect } from '@jest/globals'
import dayjs from 'dayjs'
import dayjsTimezone from 'dayjs/plugin/timezone'

import { isDaylightSavingTimeDate } from '../isDaylightSavingTimeDate'

dayjs.extend(dayjsTimezone)

describe('utils/isDaylightSavingTimeDate()', () => {
  const guessedTimezone = dayjs.tz.guess()

  it('should return `false` for a winter date in Europe/Paris', () => {
    if (guessedTimezone !== 'Europe/Paris') {
      return
    }

    const localDate = new Date(2021, 0, 1)

    const result = isDaylightSavingTimeDate(localDate)

    expect(result).toStrictEqual(false)
  })

  it('should return `true` for a summer date in Europe/Paris', () => {
    if (guessedTimezone !== 'Europe/Paris') {
      return
    }

    const localDate = new Date(2021, 6, 1)

    const result = isDaylightSavingTimeDate(localDate)

    expect(result).toStrictEqual(true)
  })

  it('should return `true` for both a winter or a summer date in UTC', () => {
    if (guessedTimezone !== 'UTC') {
      return
    }

    const localSummerDate = new Date(2021, 0, 1)

    const summerResult = isDaylightSavingTimeDate(localSummerDate)

    expect(summerResult).toStrictEqual(false)

    const localWinterDate = new Date(2021, 6, 1)

    const winterResult = isDaylightSavingTimeDate(localWinterDate)

    expect(winterResult).toStrictEqual(false)
  })
})
