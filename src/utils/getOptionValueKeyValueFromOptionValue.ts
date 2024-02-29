import type { OptionValueType } from '../types/definitions'

/**
 * @internal
 */
export function getOptionValueKeyValueFromOptionValue<OptionValue extends OptionValueType>(
  optionValue: OptionValue,
  optionValueKey?: keyof OptionValue | undefined
): boolean | string | number {
  if (optionValueKey) {
    if (typeof optionValue[optionValueKey] !== 'number' && typeof optionValue[optionValueKey] !== 'string') {
      throw new Error(
        [
          `You must provide a valid option value key when using objects as option values.`,
          `The property value must exist and be a unique number or a string.`,
          `OptionValue: \`${JSON.stringify(optionValue)}\`.`,
          `OptionValueKey: \`${String(optionValueKey)}\`.`
        ].join(' ')
      )
    }

    return optionValue[optionValueKey] as number | string
  }

  if (typeof optionValue !== 'boolean' && typeof optionValue !== 'number' && typeof optionValue !== 'string') {
    throw new Error(
      [
        `You must provide an option value key when using objects as option values.`,
        `OptionValue: \`${JSON.stringify(optionValue)}\`.`
      ].join(' ')
    )
  }

  return optionValue
}
