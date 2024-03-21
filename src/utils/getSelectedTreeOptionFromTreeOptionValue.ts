import { getSelectedOptionFromOptionValue } from './getSelectedOptionFromOptionValue'

import type { Option, OptionValueType, TreeOption } from '@types_/definitions'

function getLeafOptionsFromTreeOptions<OptionValue extends OptionValueType>(
  treeOptions: Array<TreeOption<OptionValue>>
): Array<Option<OptionValue>> {
  return treeOptions.reduce<Array<Option<OptionValue>>>((leafOptions, option) => {
    if ('value' in option) {
      return [...leafOptions, option as Option<OptionValue>]
    }

    return [...leafOptions, ...getLeafOptionsFromTreeOptions(option.children)]
  }, [])
}

/**
 * Get the matching tree option deepest child from a tree option value in a tree option list.
 */
export function getSelectedTreeOptionFromTreeOptionValue<OptionValue extends OptionValueType = string>(
  allOptions: Array<TreeOption<OptionValue>>,
  selectedOptionValue: OptionValue | undefined,
  optionValueKey?: keyof OptionValue | undefined
): Option<OptionValue> | undefined {
  const allLeafOptions = getLeafOptionsFromTreeOptions(allOptions)

  return getSelectedOptionFromOptionValue(allLeafOptions, selectedOptionValue, optionValueKey)
}
