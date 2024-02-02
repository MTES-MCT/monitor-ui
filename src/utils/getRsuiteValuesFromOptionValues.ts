import type { OptionValueType } from '../types/definitions'

export function getRsuiteValuesFromOptionValues<OptionValue extends OptionValueType = string>(
  optionValues: OptionValue[] | undefined,
  optionValueKey?: keyof OptionValue | undefined
): string[] {
  if (!optionValues || optionValues.length === 0) {
    return []
  }

  return optionValues
    .filter(optionValue => optionValue !== undefined)
    .map(optionValue => String(optionValueKey ? optionValue[optionValueKey] : optionValue))
}
