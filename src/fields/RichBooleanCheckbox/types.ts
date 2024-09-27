import type { RichBoolean } from '@constants'
import type { Option } from '@types_/definitions'

export type RichBooleanOptionValue = RichBoolean.FALSE | RichBoolean.TRUE
export type RichBooleanOption = Option<RichBooleanOptionValue>
