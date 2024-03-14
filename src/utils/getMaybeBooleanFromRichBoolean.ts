import { RichBoolean } from '../constants'

export function getMaybeBooleanFromRichBoolean(richBoolean: RichBoolean): boolean | undefined {
  switch (richBoolean) {
    case RichBoolean.FALSE:
      return false

    case RichBoolean.TRUE:
      return true

    default:
      return undefined
  }
}
