import { describe, expect, it } from '@jest/globals'
import dayjs from 'dayjs'

import { getFormattedMissionUpdateDate } from '../getFormattedMissionUpdateDate'

describe('utils/getFormattedMissionUpdateDate()', () => {
  it('should return the expected message when the date is today', () => {
    const missionUpdatedAtUtc = dayjs().subtract(3, 'hour').utc()
    const result = getFormattedMissionUpdateDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH')}h${missionUpdatedAtUtc.format('mm')}`
    expect(result).toStrictEqual(`aujourdhui à ${expectedHour} (UTC)`)
  })

  it('should return the expected message when the date is yesterday', () => {
    const missionUpdatedAtUtc = dayjs().subtract(1, 'day').utc()
    const result = getFormattedMissionUpdateDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH')}h${missionUpdatedAtUtc.format('mm')}`

    expect(result).toStrictEqual(`hier à ${expectedHour} (UTC)`)
  })

  it('should return the expected message when the date is neither today nor yesterday', () => {
    const missionUpdatedAtUtc = dayjs().subtract(3, 'day').utc()
    const result = getFormattedMissionUpdateDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH')}h${missionUpdatedAtUtc.format('mm')}`
    expect(result).toStrictEqual(`le ${missionUpdatedAtUtc.format('DD/MM/YYYY')} à ${expectedHour} (UTC)`)
  })
})
