import { describe, expect, it } from '@jest/globals'
import dayjs from 'dayjs'

import { getLocalizedDayjs } from '../getLocalizedDayjs'

describe('utils/getLocalizedDayjs()', () => {
  it('should return a local date with the same hours and minutes than the UTC date provided (with a `Date` date)', () => {
    const winterUtcDate = new Date('2022-01-02T03:04:05.006Z')

    const winterResult = getLocalizedDayjs(winterUtcDate)

    // 2022-01-02T03:04:05.006Z => 2022-01-02T03:04:05.006+01:00 in Europe/Paris time zone
    expect(winterResult.format()).toStrictEqual(`2022-01-02T03:04:05${dayjs(winterUtcDate).format('Z')}`)
    expect(winterResult.millisecond()).toStrictEqual(6)

    const summerUtcDate = new Date('2022-07-02T03:04:05.006Z')

    const summerResult = getLocalizedDayjs(summerUtcDate)

    // 2022-07-02T03:04:05.006Z => 2022-07-02T03:04:05.006+02:00 in Europe/Paris time zone
    // (since this date happens during DST)
    expect(summerResult.format()).toStrictEqual(`2022-07-02T03:04:05${dayjs(summerUtcDate).format('Z')}`)
    expect(summerResult.millisecond()).toStrictEqual(6)
  })

  it('should return a local date with the same hours and minutes than the UTC date provided (with a `string` date)', () => {
    const winterUtcDate = '2022-01-02T03:04:05.006Z'

    const winterResult = getLocalizedDayjs(winterUtcDate)

    // 2022-01-02T03:04:05.006Z => 2022-01-02T03:04:05.006+01:00 in Europe/Paris time zone
    expect(winterResult.format()).toStrictEqual(`2022-01-02T03:04:05${dayjs(winterUtcDate).format('Z')}`)
    expect(winterResult.millisecond()).toStrictEqual(6)

    const summerUtcDate = '2022-07-02T03:04:05.006Z'

    const summerResult = getLocalizedDayjs(summerUtcDate)

    // 2022-07-02T03:04:05.006Z => 2022-07-02T03:04:05.006+02:00 in Europe/Paris time zone
    // (since this date happens during DST)
    expect(summerResult.format()).toStrictEqual(`2022-07-02T03:04:05${dayjs(summerUtcDate).format('Z')}`)
    expect(summerResult.millisecond()).toStrictEqual(6)
  })
})
