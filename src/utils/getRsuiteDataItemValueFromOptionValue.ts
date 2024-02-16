import type { OptionValueType } from '../types/definitions'

/**
 * @internal
 */
export function getRsuiteDataItemValueFromOptionValue<OptionValue extends OptionValueType = string>(
  optionValue: OptionValue,
  optionValueKey?: keyof OptionValue | undefined
): string {
  if (optionValueKey) {
    if (typeof optionValue[optionValueKey] !== 'number' && typeof optionValue[optionValueKey] !== 'string') {
      throw new Error(
        [
          `You must provide a valid option value key when using objects as option values.`,
          `OptionValue: \`${JSON.stringify(optionValue)}\`.`,
          `OptionValueKey: \`${String(optionValueKey)}\`.`
        ].join(' ')
      )
    }

    return String(optionValue[optionValueKey])
  }

  if (typeof optionValue !== 'number' && typeof optionValue !== 'string') {
    throw new Error(
      [
        `You must provide an option value key when using objects as option values.`,
        `OptionValue: \`${JSON.stringify(optionValue)}\`.`
      ].join(' ')
    )
  }

  return String(optionValue)
}
