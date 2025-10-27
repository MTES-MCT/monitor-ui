import { ensure } from '@utils/ensure'

import { getOptionValueKeyValueFromOptionValue } from './getOptionValueKeyValueFromOptionValue'

import type { Option, OptionValueType } from '@types_/definitions'

/**
 * Get the matching option from an option value in an option list.
 */
export function getSelectedOptionFromOptionValue<OptionValue extends OptionValueType = string>(
  allOptions: Array<Option<OptionValue>>,
  selectedOptionValue: OptionValue | undefined,
  optionValueKey?: keyof OptionValue | undefined
): Option<OptionValue> | undefined {
  if (selectedOptionValue === undefined) {
    return undefined
  }

  const selectedOptionValueKeyValue = getOptionValueKeyValueFromOptionValue(selectedOptionValue, optionValueKey)

  return ensure(
    allOptions.find(
      option => getOptionValueKeyValueFromOptionValue(option.value, optionValueKey) === selectedOptionValueKeyValue
    ),
    'selectedOption'
  )
}
