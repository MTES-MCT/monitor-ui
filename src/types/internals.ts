/**
 * Private types and interfaces. All types defined here should never be exposed to the library's users.
 */

import type { OptionValueType } from './definitions'
import type { ItemDataType } from 'rsuite/esm/@types/common'

/**
 * Since Rsuite restricts `value` to `string | number`, we use this proxy type,
 * allowing us to use conventioned option values that can include objects
 */
export interface OptionAsRsuiteItemDataType<OptionValue extends OptionValueType = string> extends ItemDataType<string> {
  children?: Array<OptionAsRsuiteItemDataType<OptionValue>>
  label: string
  optionValue: OptionValue
  value: string
}
