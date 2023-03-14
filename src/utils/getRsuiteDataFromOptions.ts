import type { Option, OptionAsRsuiteItemDataType } from '../types'

export function getRsuiteDataFromOptions<T extends number | string | Record<string, any>>(
  options: Array<Option<T>>,
  optionValueKey?: keyof T | undefined
): Array<OptionAsRsuiteItemDataType<T>> {
  const getDataValueFromOptionValue = (value: T) => String(optionValueKey ? value[optionValueKey] : value)

  return options.map(({ value, ...rest }) => ({
    ...rest,
    optionValue: value,
    value: getDataValueFromOptionValue(value)
  }))
}
