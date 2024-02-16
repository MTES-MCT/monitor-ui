import { getRsuiteDataItemValueFromOptionValue } from './getRsuiteDataItemValueFromOptionValue'

import type { Option, OptionValueType } from '../types/definitions'
import type { RsuiteDataItem } from '../types/internals'

/**
 * @internal
 */
export function getRsuiteDataItemsFromOptions<OptionValue extends OptionValueType = string>(
  options: Array<Option<OptionValue>>,
  optionValueKey?: keyof OptionValue | undefined
): Array<RsuiteDataItem<OptionValue>> {
  return options.map(option => {
    const { value: optionValue, ...rest } = option

    const rsuiteItemDataValue = getRsuiteDataItemValueFromOptionValue(optionValue, optionValueKey)

    return {
      ...rest,
      optionValue,
      value: rsuiteItemDataValue
    }
  })
}
