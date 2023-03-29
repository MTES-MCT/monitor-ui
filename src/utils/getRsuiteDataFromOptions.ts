import type { Option, OptionAsRsuiteItemDataType, OptionValueType } from '../types'

export function getRsuiteDataFromOptions<OptionValue extends OptionValueType = string>(
  options: Array<Option<OptionValue>>,
  optionValueKey?: keyof OptionValue | undefined
): Array<OptionAsRsuiteItemDataType<OptionValue>> {
  const getDataValueFromOptionValue = (value: OptionValue) => String(optionValueKey ? value[optionValueKey] : value)

  return options.map(({ value, ...rest }) => ({
    ...rest,
    optionValue: value,
    value: getDataValueFromOptionValue(value)
  }))
}
