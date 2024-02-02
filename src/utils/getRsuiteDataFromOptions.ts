import { getRsuiteValueFromOptionValue } from './getRsuiteValueFromOptionValue'

import type { Option, OptionValueType } from '../types/definitions'
import type { OptionAsRsuiteItemDataType } from '../types/internals'

export function getRsuiteDataFromOptions<OptionValue extends OptionValueType = string>(
  options: Array<Option<OptionValue>>,
  optionValueKey?: keyof OptionValue | undefined
): Array<OptionAsRsuiteItemDataType<OptionValue>> {
  return options.map(({ children, value, ...rest }) =>
    children
      ? {
          ...rest,
          children: getRsuiteDataFromOptions(children, optionValueKey),
          optionValue: value,
          value: getRsuiteValueFromOptionValue(value, optionValueKey) as string
        }
      : {
          ...rest,
          optionValue: value,
          value: getRsuiteValueFromOptionValue(value, optionValueKey) as string
        }
  )
}
