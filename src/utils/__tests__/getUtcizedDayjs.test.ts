import { expect } from '@jest/globals'

import { getUtcizedDayjs } from '../getUtcizedDayjs'

describe('utils/getUtcizedDayjs()', () => {
  it('should return a UTC date with the same hours and minutes than the local date provided', () => {
    const winterLocalDate = new Date('2022-01-02T03:04:05.006')

    const winterResult = getUtcizedDayjs(winterLocalDate)

    // 2022-01-02T03:04:05.006+01:00 => 2022-01-02T03:04:05.006Z in Europe/Paris time zone
    expect(winterResult.format()).toStrictEqual('2022-01-02T03:04:05Z')
    expect(winterResult.millisecond()).toStrictEqual(6)

    const summerLocalDate = new Date('2022-07-02T03:04:05.006')

    const summerResult = getUtcizedDayjs(summerLocalDate)

    // 2022-07-02T03:04:05.006+02:00 => 2022-07-02T03:04:05.006Z in Europe/Paris time zone
    // (since this date happens during DST)
    expect(summerResult.format()).toStrictEqual('2022-07-02T03:04:05Z')
    expect(summerResult.millisecond()).toStrictEqual(6)
  })
})
