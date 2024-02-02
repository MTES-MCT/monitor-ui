import type { OptionValueType } from '../types/definitions'

export function getRsuiteValueFromOptionValue<OptionValue extends OptionValueType = string>(
  optionValue: OptionValue | undefined,
  optionValueKey?: keyof OptionValue | undefined
): string | undefined {
  return optionValue !== undefined ? String(optionValueKey ? optionValue[optionValueKey] : optionValue) : undefined
}
