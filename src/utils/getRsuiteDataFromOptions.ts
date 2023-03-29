import { getRsuiteValueFromOptionValue } from './getRsuiteValueFromOptionValue'

import type { Option, OptionAsRsuiteItemDataType, OptionValueType } from '../types'

export function getRsuiteDataFromOptions<OptionValue extends OptionValueType = string>(
  options: Array<Option<OptionValue>>,
  optionValueKey?: keyof OptionValue | undefined
): Array<OptionAsRsuiteItemDataType<OptionValue>> {
  return options.map(({ value, ...rest }) => ({
    ...rest,
    optionValue: value,
    value: getRsuiteValueFromOptionValue(value, optionValueKey) as string
  }))
}
