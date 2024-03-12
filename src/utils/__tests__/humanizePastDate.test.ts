import { describe, expect, it } from '@jest/globals'
import dayjs from 'dayjs'

import { humanizePastDate } from '../humanizePastDate'

describe('utils/humanizePastDate()', () => {
  it('should return the expected message when the date is today', () => {
    const missionUpdatedAtUtc = dayjs().subtract(1, 'minute').utc()
    const result = humanizePastDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH[h]mm')}`
    expect(result).toStrictEqual(`aujourd'hui à ${expectedHour}`)
  })

  it('should return the expected message when the date is yesterday', () => {
    const missionUpdatedAtUtc = dayjs().subtract(1, 'day').utc()
    const result = humanizePastDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH[h]mm')}`
    expect(result).toStrictEqual(`hier à ${expectedHour}`)
  })

  it('should return the expected message when the date is neither today nor yesterday', () => {
    const missionUpdatedAtUtc = dayjs().subtract(3, 'day').utc()
    const result = humanizePastDate(missionUpdatedAtUtc.format('YYYY-MM-DDTHH:mm:ssZ'))

    const expectedHour = `${missionUpdatedAtUtc.format('HH[h]mm')}`
    expect(result).toStrictEqual(`le ${missionUpdatedAtUtc.format('DD/MM/YYYY')} à ${expectedHour}`)
  })
})
