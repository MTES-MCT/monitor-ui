import { getRsuiteDataItemValueFromOptionValue } from './getRsuiteDataItemValueFromOptionValue'

import type { OptionValueType } from '../types/definitions'

/**
 * @see {@link getRsuiteDataItemValueFromOptionValue}
 * @internal
 */
export function getRsuiteDataItemValuesFromOptionValues<OptionValue extends OptionValueType = string>(
  optionValues: OptionValue[] | undefined,
  optionValueKey?: keyof OptionValue | undefined
): string[] {
  if (!optionValues || optionValues.length === 0) {
    return []
  }

  return optionValues.map(optionValue => getRsuiteDataItemValueFromOptionValue(optionValue, optionValueKey))
}
