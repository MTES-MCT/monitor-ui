/* eslint-disable typescript-sort-keys/string-enum */
import { expect } from '@jest/globals'

import { getOptionsFromLabelledEnum } from '../getOptionsFromLabelledEnum'

describe('utils/getOptionsFromLabelledEnum()', () => {
  it('should return the expected array of options', () => {
    enum LabelledEnum {
      TWO = 'two',
      ONE = 'one'
    }

    const result = getOptionsFromLabelledEnum(LabelledEnum, true)

    expect(result).toStrictEqual([
      {
        label: 'one',
        value: 'ONE'
      },
      {
        label: 'two',
        value: 'TWO'
      }
    ])
  })

  it('should return the expected array of options not sorted alphabetically', () => {
    enum LabelledEnum {
      BANANA = 'banana',
      APPLE = 'apple',
      GRAPES = 'grapes'
    }

    const result = getOptionsFromLabelledEnum(LabelledEnum)

    expect(result).toStrictEqual([
      {
        label: 'banana',
        value: 'BANANA'
      },
      {
        label: 'apple',
        value: 'APPLE'
      },
      {
        label: 'grapes',
        value: 'GRAPES'
      }
    ])
  })

  it('should return an empty array with an empty enum', () => {
    enum LabelledEnum {}

    const result = getOptionsFromLabelledEnum(LabelledEnum)

    expect(result).toStrictEqual([])
  })
})
