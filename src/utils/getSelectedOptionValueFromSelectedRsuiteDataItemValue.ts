import { ensure } from '@utils/ensure'

import type { OptionValueType } from '@types_/definitions'
import type { RsuiteDataItem } from '@types_/internals'

/**
 * @internal
 */
export function getSelectedOptionValueFromSelectedRsuiteDataItemValue<OptionValue extends OptionValueType>(
  allRsuiteData: Array<RsuiteDataItem<OptionValue>>,
  selectedRsuiteValue: string | null
): OptionValue | undefined {
  // eslint-disable-next-line no-null/no-null
  if (selectedRsuiteValue === null) {
    return undefined
  }

  const selectedRsuiteData = ensure(
    allRsuiteData.find(rsuiteData => rsuiteData.value === selectedRsuiteValue),
    'selectedRsuiteData'
  )

  return selectedRsuiteData.optionValue
}
