import { ensure } from '@utils/ensure'

import { getOptionValueKeyValueFromOptionValue } from './getOptionValueKeyValueFromOptionValue'

import type { Option, OptionValueType } from '@types_/definitions'

/**
 * Get the selected option from the option value.
 */
export function getSelectedOptionFromOptionValue<OptionValue extends OptionValueType = string>(
  allOptions: Array<Option<OptionValue>>,
  selectedOptionValue: OptionValue | undefined,
  optionValueKey?: keyof OptionValue | undefined
): Option<OptionValue> | undefined {
  // eslint-disable-next-line no-null/no-null
  if (selectedOptionValue === undefined) {
    return undefined
  }

  const selectedOptionValueKeyValue = getOptionValueKeyValueFromOptionValue(selectedOptionValue, optionValueKey)

  const selectedOption = ensure(
    allOptions.find(
      option => getOptionValueKeyValueFromOptionValue(option.value, optionValueKey) === selectedOptionValueKeyValue
    ),
    'selectedOption'
  )

  return selectedOption
}
