import { getRsuiteDataItemsFromOptions } from './getRsuiteDataItemsFromOptions'

import type { CustomSearch } from '@libs/CustomSearch'
import type { Option, OptionValueType } from '@types_/definitions'
import type { RsuiteDataItem } from '@types_/internals'

export function handleCustomSearch<OptionValue extends OptionValueType = string>(
  customSearchMinQueryLength: number,
  customSearchRef: React.RefObject<CustomSearch<Option<OptionValue>> | undefined>,
  nextQuery: string,
  optionValueKey: keyof OptionValue | undefined,
  rsuiteData: RsuiteDataItem<OptionValue>[]
) {
  if (!customSearchRef.current || nextQuery.trim().length < customSearchMinQueryLength) {
    return rsuiteData
  }

  return nextQuery.trim().length >= customSearchMinQueryLength
    ? getRsuiteDataItemsFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
    : rsuiteData
}
