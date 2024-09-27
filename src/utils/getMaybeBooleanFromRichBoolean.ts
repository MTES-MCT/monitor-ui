import { RichBoolean } from '@constants'

export function getMaybeBooleanFromRichBoolean(value: RichBoolean | undefined): boolean | undefined {
  switch (value) {
    case RichBoolean.FALSE:
      return false

    case RichBoolean.TRUE:
      return true

    default:
      return undefined
  }
}
