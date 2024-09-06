/* eslint-disable typescript-sort-keys/string-enum */

import { describe, expect, it } from '@jest/globals'

import { getOptionsFromLabelledEnum } from '../getOptionsFromLabelledEnum'

describe('utils/getOptionsFromLabelledEnum()', () => {
  it('should return the expected array of options naturally French-sorted', () => {
    enum LabelledEnum {
      XYLOPHONE = 'Xylophone',
      SCREEN_LOWERCASE = 'écran',
      SCREEN = 'Écran',
      E_LOWERCASE = 'e',
      E = 'E',
      LAMP_SHADE = 'Abat-jour',
      TODO = 'À faire',
      A_LOWERCASE = 'a',
      A = 'A'
    }
    const mustSort = true

    const result = getOptionsFromLabelledEnum(LabelledEnum, mustSort)

    expect(result).toStrictEqual([
      {
        label: 'a',
        value: 'A_LOWERCASE'
      },
      {
        label: 'A',
        value: 'A'
      },
      {
        label: 'À faire',
        value: 'TODO'
      },
      {
        label: 'Abat-jour',
        value: 'LAMP_SHADE'
      },
      {
        label: 'e',
        value: 'E_LOWERCASE'
      },
      {
        label: 'E',
        value: 'E'
      },
      {
        label: 'écran',
        value: 'SCREEN_LOWERCASE'
      },
      {
        label: 'Écran',
        value: 'SCREEN'
      },
      {
        label: 'Xylophone',
        value: 'XYLOPHONE'
      }
    ])
  })

  it('should return the expected array of options not sorted alphabetically', () => {
    enum LabelledEnum {
      BANANA = 'banana',
      APPLE = 'apple',
      GRAPES = 'grapes'
    }
    const mustSort = false

    const result = getOptionsFromLabelledEnum(LabelledEnum, mustSort)

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
