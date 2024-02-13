import { equals } from 'ramda'

import { RichBoolean } from '../../constants'

import type { RichBooleanOptionValue } from './types'

export function getRichBooleanFromRichBooleanOptionValues(
  optionValues: RichBooleanOptionValue[] | undefined
): RichBoolean | undefined {
  switch (true) {
    case equals(optionValues, [RichBoolean.FALSE, RichBoolean.TRUE]):
    case equals(optionValues, [RichBoolean.TRUE, RichBoolean.FALSE]):
      return RichBoolean.BOTH

    case equals(optionValues, [RichBoolean.FALSE]):
      return RichBoolean.FALSE

    case equals(optionValues, [RichBoolean.TRUE]):
      return RichBoolean.TRUE

    case equals(optionValues, undefined):
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
