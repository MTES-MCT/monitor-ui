import { RichBoolean } from '@constants'
import isEqual from 'lodash/isEqual'

import type { RichBooleanOptionValue } from './types'

export function getRichBooleanFromRichBooleanOptionValues(
  optionValues: RichBooleanOptionValue[] | undefined
): RichBoolean | undefined {
  switch (true) {
    case isEqual(optionValues, [RichBoolean.FALSE, RichBoolean.TRUE]):
    case isEqual(optionValues, [RichBoolean.TRUE, RichBoolean.FALSE]):
      return RichBoolean.BOTH

    case isEqual(optionValues, [RichBoolean.FALSE]):
      return RichBoolean.FALSE

    case isEqual(optionValues, [RichBoolean.TRUE]):
      return RichBoolean.TRUE

    case isEqual(optionValues, undefined):
      return undefined

    default:
      throw new Error(`Invalid \`value\`: \`${optionValues}\`.`)
  }
}

export function getRichBooleanOptionValuesFromRichBoolean(
  value: RichBoolean | undefined
): RichBooleanOptionValue[] | undefined {
  switch (value) {
    case RichBoolean.BOTH:
      return [RichBoolean.FALSE, RichBoolean.TRUE]

    case RichBoolean.FALSE:
      return [RichBoolean.FALSE]

    case RichBoolean.TRUE:
      return [RichBoolean.TRUE]

    case undefined:
      return undefined

    default:
      throw new Error(`Invalid \`value\`: \`${value}\`.`)
  }
}
