import type { OptionValueType } from '@types_/definitions'
import type { RsuiteDataItem } from '@types_/internals'

/**
 * @internal
 */
export function getSelectedOptionValuesFromSelectedRsuiteDataItemValues<OptionValue extends OptionValueType>(
  allRsuiteData: Array<RsuiteDataItem<OptionValue>>,
  selectedRsuiteValues: string[]
): OptionValue[] {
  return allRsuiteData.reduce<OptionValue[]>((optionsValues, rsuiteDataItem) => {
    if (!selectedRsuiteValues.includes(rsuiteDataItem.value)) {
      return optionsValues
    }

    return [...optionsValues, rsuiteDataItem.optionValue]
  }, [])
}
