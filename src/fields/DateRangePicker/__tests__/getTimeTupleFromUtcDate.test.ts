import { expect } from '@jest/globals'

import { getLocalizedDayjs } from '../../../utils/getLocalizedDayjs'
import { getTimeTupleFromUtcDate } from '../utils'

describe('ui/DateRangePicker/utils.getTimeTupleFromUtcDate()', () => {
  it('should return the expected time tuple from a date', () => {
    const localizedDate = getLocalizedDayjs('2022-03-04T01:02:00.000Z').toDate()

    const result = getTimeTupleFromUtcDate(localizedDate)

    expect(result).toMatchObject(['01', '02'] as any)
  })
})
